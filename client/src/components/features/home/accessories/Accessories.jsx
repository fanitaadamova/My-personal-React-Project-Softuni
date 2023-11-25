import styles from './Accessories.module.css';
import { useEffect, useState } from "react";
import * as techniqueAPI from '../../../../api/techniqueAPI';

import Product from "../../../features/products/product/Product";
import Loader from "../../../shared/Loader";


export default function Accessories() {
    const [accessories, setAccessories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        techniqueAPI.getAllAccessories()
            .then(result => setAccessories(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

    }, []);



    return (
        <div className={styles.three_box}>
            <div className="container">
                <div className={styles.titlepage}>
                    <h2>Оферти за аксесоари</h2>
                </div>
                <div className={styles.dummy}></div>
                <div className="row">

                    {isLoading && < Loader />}

                    {accessories.length > 0
                        ? (
                            <>
                                {
                                    accessories.map(tech => (
                                        < Product
                                            key={tech._id}
                                            productId={tech._id}
                                            type={tech.type}
                                            model={tech.model}
                                            description={tech.description}
                                            price={tech.price}
                                            img={tech.img}
                                        />
                                    ))
                                }
                            </>
                        )
                        :
                        <div className={styles.no_accessories}>
                            <p className={styles.no_content}>Няма обяви за аксесоари!</p>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}