import styles from './SmartWatches.module.css';
import { useEffect, useState } from "react";
import * as techniqueAPI from '../../../../api/techniqueAPI';

import Product from "../../../features/products/product/Product";
import Loader from "../../../shared/Loader";


export default function SmartWatches() {
    const [watches, setWatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        techniqueAPI.getAllSmartWatches()
            .then(result => setWatches(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

    }, []);



    return (
        <div className={styles.three_box}>
            <div className="container">
                <div className={styles.titlepage}>
                    <h2>Оферти за часовници</h2>
                </div>
                <div className={styles.dummy}></div>
                
                <div className="row">

                    {isLoading && < Loader />}

                    {watches.length > 0
                        ? (
                            <>

                                {watches.map(tech => (
                                    < Product
                                        key={tech._id}
                                        productId={tech._id}
                                        type={tech.type}
                                        model={tech.model}
                                        description={tech.description}
                                        price={tech.price}
                                        img={tech.img}
                                    />
                                ))}

                            </>
                        )
                        :
                        <div className={styles.no_watches}>
                            <p className={styles.no_content}>Няма обяви за Смарт часовници!</p>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}