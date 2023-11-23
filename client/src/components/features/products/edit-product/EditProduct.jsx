import styles from './EditProduct.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as techniqueAPI from '../../../../api/techniqueAPI';
import Loader from '../../../shared/Loader';



export default function EditProduct() {
    const navigate = useNavigate();

    const { productId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [productInfo, setProductInfo] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        techniqueAPI.getOne(productId)
            .then(result => setProductInfo(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

    }, [productId]);

    const changeHandler = (e) => {
        let value = '';
        if (e.target.type) {
            value = e.target.value;
        }

        setProductInfo(state => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        techniqueAPI.edit(productId, productInfo)
            .then(() => navigate('/catalog'))
            .catch(err => console.log(err));

    };

    const modelValidator = () => {
        if (productInfo.model.length < 5) {
            setErrors(state => ({
                ...state,
                model: 'Модела трябва да бъде минимум 5 символа!',
            }));
        } else {
            if (errors.model) {
                setErrors(state => ({ ...state, model: '' }));
            }
        }
    };

    const yearValidator = () => {
        if (Number(productInfo.year) < 2000) {
            setErrors(state => ({
                ...state,
                year: 'Годината трябва да бъде над 2000!',
            }));
        } else {
            if (errors.year) {
                setErrors(state => ({ ...state, year: '' }));
            }
        }
    };

    const priceValidator = () => {
        if (Number(productInfo.price) <= 0) {
            setErrors(state => ({
                ...state,
                price: 'Цената трябва да бъде по-голяма от 0!',
            }));
        } else {
            if (errors.price) {
                setErrors(state => ({ ...state, price: '' }));
            }
        }
    };

    const descriptionValidator = () => {
        if (productInfo.description.length < 5) {
            setErrors(state => ({
                ...state,
                description: 'Описанието на продукта трябва да бъде минимум 5 символа!',
            }));
        } else {
            if (errors.description) {
                setErrors(state => ({ ...state, description: '' }));
            }
        }
    };

    const osValidator = () => {
        if (productInfo.os.length < 1) {
            setErrors(state => ({
                ...state,
                os: 'Полето е задължително!',
            }));
        } else {
            if (errors.os) {
                setErrors(state => ({ ...state, os: '' }));
            }
        }
    };

    const imgValidator = () => {
        if (productInfo.img.length < 1) {
            setErrors(state => ({
                ...state,
                img: 'Полето е задължително!',
            }));
        } else {
            if (errors.img) {
                setErrors(state => ({ ...state, img: '' }));
            }
        }
    };

    return (
        <div className={styles.product}>
            {isLoading && < Loader />}

            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className={styles.titlepage}>
                            <h2>Промяна на оферта</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1">

                        <form id="request" method='POST' className={styles.main_form}
                            onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <label className={styles.label} htmlFor="type">Избери тип:</label>
                                    <select className={styles.contactus}
                                        name="type" id="type"
                                        onChange={changeHandler}
                                        value={productInfo.type}>
                                        <option value="Лаптоп">Лаптоп</option>
                                        <option value="Таблет">Таблет</option>
                                        <option value="Телефон">Телефон</option>
                                        <option value="Смарт часовник">Смарт часовник</option>
                                        <option value="Аксесоар">Аксесоар</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="model" className={styles.label}>Модел:</label>
                                    <input
                                        className={styles.contactus}
                                        placeholder="Модел"
                                        type="text"
                                        name="model"
                                        id="model"
                                        value={productInfo.model}
                                        onChange={changeHandler}
                                        onBlur={modelValidator}
                                    />

                                    {errors.model && (
                                        <p className={styles.errorMessage}>{errors.model}</p>
                                    )}
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="year" className={styles.label} >Година:</label>
                                    <input
                                        className={styles.contactus}
                                        placeholder="Година"
                                        type="number"
                                        name="year"
                                        id="year"
                                        value={productInfo.year}
                                        onChange={changeHandler}
                                        onBlur={yearValidator}
                                    />

                                    {errors.year && (
                                        <p className={styles.errorMessage}>{errors.year}</p>
                                    )}
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="description" className={styles.label} >Описание:</label>
                                    <textarea
                                        className={styles.description}
                                        placeholder="Описание"
                                        type="text"
                                        name="description"
                                        id="description"
                                        value={productInfo.description}
                                        onChange={changeHandler}
                                        onBlur={descriptionValidator}
                                    />

                                    {errors.description && (
                                        <p className={styles.errorMessage}>{errors.description}</p>
                                    )}
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="price" className={styles.label} >Цена:</label>
                                    <input
                                        className={styles.contactus}
                                        placeholder="Цена"
                                        type="number"
                                        name="price"
                                        id="price"
                                        value={productInfo.price}
                                        onChange={changeHandler}
                                        onBlur={priceValidator}
                                    />

                                    {errors.price && (
                                        <p className={styles.errorMessage}>{errors.price}</p>
                                    )}
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="img" className={styles.label} >Добави снимка:</label>
                                    <input
                                        className={styles.contactus}
                                        type="text"
                                        name="img"
                                        id="img"
                                        value={productInfo.img}
                                        onChange={changeHandler}
                                        onBlur={imgValidator}
                                    />

                                    {errors.img && (
                                        <p className={styles.errorMessage}>{errors.img}</p>
                                    )}
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="os" className={styles.label} >Операционна система:</label>
                                    <input
                                        className={styles.contactus}
                                        placeholder="Операционна система"
                                        type="text"
                                        name="os"
                                        id="os"
                                        value={productInfo.os}
                                        onChange={changeHandler}
                                        onBlur={osValidator}
                                    />

                                    {errors.os && (
                                        <p className={styles.errorMessage}>{errors.os}</p>
                                    )}
                                </div>
                                <div className="col-md-12">
                                    <button className={styles.send_btn} type="submit"
                                        disabled={(Object.values(errors).some(x => x)
                                            || (Object.values(productInfo).some(x => x == '')))}

                                    >Запази</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}