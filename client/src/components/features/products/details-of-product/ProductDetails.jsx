import styles from './ProductDetails.module.css';
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as techniqueAPI from '../../../../api/techniqueAPI';
import * as purchaseAPI from '../../../../api/purchaseAPI';
import { AuthContext } from '../../../../contexts/AuthContext';

import Loader from '../../../shared/Loader';
import DeleteModal from '../delete-product/DeleteModal';

export default function ProductDetails() {
    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);
    const { productId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [showDelete, setShowDelete] = useState(false);
    const [isBought, setIsBought] = useState(false);
    const [productDetails, setProductDetails] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});



    useEffect(() => {

        setIsLoading(true);

        techniqueAPI.getOne(productId)
            .then(result => setProductDetails(result))
            .catch(err => {
                if (err.code == 404) { navigate('/not-found'); }
                console.log(err.message);
            })
            .finally(() => setIsLoading(false));


        if (auth) {
            purchaseAPI.getBuyersOfProduct(productId)
                .then(result => result.includes(auth._id) ? setIsBought(true) : setIsBought(false))
                .catch(err => {
                    console.log();
                    setHasServerError(true);
                    setServerError(err.message);
                    console.log(err.message);
                })
                .finally(() => setIsLoading(false));
        }

    }, [productId, auth, navigate]);

    const deleteClickHandler = () => {
        setShowDelete(true);
    };


    const onDeleteProduct = (e) => {
        e.preventDefault();
        setShowDelete(false);

        techniqueAPI.remove(productId)
            .then(() => navigate('/catalog'))
            .catch(err => console.log(err));

    };

    const buyClickHandler = (e) => {
        e.preventDefault();

        const userId = auth._id;
        purchaseAPI.purchase(productId, userId)
            .then(() => setIsBought(true))
            .catch(err => console.log(err));

    };

    let isOwner = false;
    let isLogdin = false;

    if (auth) {
        if (productDetails._ownerId === auth._id) {
            isOwner = true;
        } else {
            isLogdin = true;
        }
    }

    return (
        <div className={styles.product_info}>
            {isLoading && < Loader />}

            {hasServerError && (
                <p className={styles.serverError}>Нещо се обърка :( </p>
            )}

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

                    {/* Owner of product */}
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
                            {/* Loged-in user - already bought */}
                            {isBought && (
                                <p className={styles.alreadyBought}>Вече закупи този продукт.</p>

                            )}
                            {!isBought && (
                                <a className={styles.buy} onClick={buyClickHandler}>
                                    Купи
                                </a>
                            )}
                        </div>
                    )}

                </div>

                <br />

            </div>

        </div>
    );

}