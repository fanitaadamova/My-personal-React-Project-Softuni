import styles from './ProductDetails.module.css';
import * as techniqueAPI from '../../../../api/techniqueAPI';

import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function ProductDetails() {   
    const { productId } = useParams(); 
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        techniqueAPI.getOne(productId)
            .then(result => setProductDetails(result));
    }, [productId]);


    return (
        <div className={styles.product_info}>
            <div className={styles.details}>
                <i className={styles.picture}>
                    <img className={styles.image} src={productDetails.img} alt="" />
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
                    <a className={styles.delete} href="#">
                        Изтрий
                    </a>
                </div>
                </div>

                <br />
            </div>

           
        </div>
    );

}