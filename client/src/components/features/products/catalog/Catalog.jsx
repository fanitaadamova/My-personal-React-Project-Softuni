import styles from './Catalog.module.css';
import { useEffect, useState } from "react";
import * as techniqueAPI from '../../../../api/techniqueAPI';

import Product from "../product/Product";
import Loader from "../../../shared/Loader";

export default function Catalog() {
    const [technique, setTechnique] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        techniqueAPI.getAll()
            .then(result => setTechnique(result))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

    }, []);

    return (
        <div className={styles.three_box}>
            <div className="container">

                <div className="row">

                    {isLoading && < Loader />}

                    {technique.length > 0
                        ? (
                            <>

                                {technique.map(tech => (
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
                        <div className={styles.no_technique}>
                            <p className={styles.no_content}>Няма обяви за показване!</p>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}