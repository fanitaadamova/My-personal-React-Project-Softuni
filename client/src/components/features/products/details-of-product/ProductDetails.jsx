import styles from './ProductDetails.module.css';
import * as techniqueAPI from '../../../../api/techniqueAPI';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../shared/Loader';
import DeleteModal from '../delete-product/DeleteModal';

export default function ProductDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState({});

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

                    <div className={styles.buttons}>
                        <a className={styles.edit} href="#">
                            Редактивай
                        </a>
                        <a className={styles.delete} onClick={deleteClickHandler}>
                            Изтрий
                        </a>
                    </div>
                </div>

                <br />

            </div>

        </div>
    );

}