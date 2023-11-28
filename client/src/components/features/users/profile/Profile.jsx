import styles from './Profile.module.css';
import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../../../contexts/AuthContext';
import * as techniqueAPI from '../../../../api/techniqueAPI';
import * as purchaseAPI from '../../../../api/purchaseAPI';
import Loader from '../../../shared/Loader';
import Product from '../../products/product/Product';


export default function Profile() {
    const { auth } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [ownProducts, setOwnProducts] = useState([]);
    const [boughtProduct, setBoughtProduct] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    //TODO: печатане на грешката

    useEffect(() => {
        setIsLoading(true);

        techniqueAPI.getMyOwnProducts(auth._id)
            .then((result) => setOwnProducts(result))
            .catch((error) => setErrorMessage(error.message))
            .finally(() => setIsLoading(false));


        purchaseAPI.getBoughtProducts(auth._id)
            .then(res => {
                setBoughtProduct(res);

                const sum = res.reduce((accumulator, x) => {
                    return accumulator + Number(x.productId.price);
                }, 0);
                setTotalSum(sum);

            })
            .catch(err => console.log(err));


    }, [auth]);


    return (
        <>
            <section className={styles.profile}>
                {isLoading && < Loader />}

                <div className="container py-5">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    {/* get dynamic avatar image */}
                                    <img
                                        src="https://i.pravatar.cc/500"
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                    />

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Потребителско име</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{auth.username}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">E-mail адрес</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{auth.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Мобилен номер</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{auth.phone}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.created_products}>
                    <div className="container">
                        <div className={styles.titlepage}>
                            <h2>Създадени оферти</h2>
                        </div>
                        <div className={styles.dummy}></div>


                        {ownProducts.length > 0
                            ? (<>
                                <div className="row">
                                    {ownProducts.map(tech => (
                                        < Product
                                            productId={tech._id}
                                            key={tech._id}
                                            type={tech.type}
                                            model={tech.model}
                                            description={tech.description}
                                            price={tech.price}
                                            img={tech.img}
                                        />
                                    ))}
                                </div>
                            </>)
                            : <div className={styles.no_technique}>
                                <p className={styles.no_content}>Няма създадени оферти.</p>
                            </div>
                        }

                    </div>
                </div>

                <div className={styles.bought_products}>
                    <div className="container">
                        <div className={styles.titlepage}>
                            <h2>Направени покупки <span className={styles.sum}>{totalSum} BGN</span></h2>
                        </div>
                        <div className={styles.dummy}></div>


                        {boughtProduct.length > 0
                            ? (<>
                                <div className="row">
                                    {boughtProduct.map(tech => (
                                        < Product
                                            productId={tech.productId._id}
                                            key={tech.productId._id}
                                            type={tech.productId.type}
                                            model={tech.productId.model}
                                            description={tech.productId.description}
                                            price={tech.productId.price}
                                            img={tech.productId.img}
                                        />
                                    ))}

                                </div>
                            </>)
                            : <div className={styles.no_technique}>
                                <p className={styles.no_content}>Няма закупени продукти.</p>
                            </div>
                        }

                    </div>
                </div>

            </section>


        </>



    );
}