import styles from './ProductDetails.module.css';
import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as techniqueAPI from '../../../../api/techniqueAPI';
import { AuthContext } from '../../../../contexts/AuthContext';

import Loader from '../../../shared/Loader';
import DeleteModal from '../delete-product/DeleteModal';

export default function ProductDetails() {
    const [isLoading, setIsLoading] = useState(true);
    const [showDelete, setShowDelete] = useState(false);
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        techniqueAPI.getOne(productId)
            .then(result => setProductDetails(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

    }, [productId]);

    const deleteClickHandler = () => {
        setShowDelete(true);

    };

    const onDeleteProduct = () => {
        setShowDelete(false);
        //да добавя заявка за изтриване на продукта try catch block
        console.log(`Ти изтри този продукт - ${productId}`);

    };

    const buyClickHandler = () => {
        console.log("закупи вече този продукт");

    };

    let isOwner = false;
    let isLogdin = false;

    if (auth) {
        if (productDetails._ownerId === auth._id) {
            isOwner = true;
        }

        if (productDetails._ownerId !== auth._id && auth._id) {
            isLogdin = true;
        }
    }

    return (
        <div className={styles.product_info}>
            {isLoading && < Loader />}

            {showDelete && (
                <DeleteModal
                    onClose={() => setShowDelete(false)}
                    onDeleteProduct={onDeleteProduct}
                />
            )}

            <div className={styles.details}>
                <i className={styles.picture}>
                    <img className={styles.image} src={productDetails.img}
                        alt={productDetails.model} />
                </i>
                <div className={styles.content}>
                    <h3>{productDetails.type}</h3>
                    <h4>{productDetails.model}</h4>
                    <h3>{productDetails.price} BGN</h3>
                    <h4><span>Година: </span>{productDetails.year}</h4>
                    <h4>{productDetails.os}</h4>
                    <p><span>Описание: </span>{productDetails.description}</p>

                    {/* owner of product */}
                    {isOwner && (
                        <div className={styles.buttons}>
                            <Link className={styles.edit} to={`/edit/${productId}`}>
                                Редактивай
                            </Link>
                            <a className={styles.delete} onClick={deleteClickHandler}>
                                Изтрий
                            </a>
                        </div>
                    )}
                    {isLogdin && (
                        <div className={styles.buttons}>
                            {/* logdin user - already bought */}
                            <p>Вече закупи този продукт.</p>
                            <a className={styles.buy} onClick={buyClickHandler}>
                                Купи
                            </a>
                        </div>
                    )}

                </div>

                <br />

            </div>

        </div>
    );

}