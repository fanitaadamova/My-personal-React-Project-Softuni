import styles from './AddProduct.module.css';

export default function AddProduct() {
    return (
        <div className={styles.product}>
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className={styles.titlepage}>
                            <h2>Създай Оферта</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <form id="request" className={styles.main_form}>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <label className={styles.label} htmlFor="type">Избери тип:</label>
                                    <select  className={styles.contactus} name="type" id="type" form="type">
                                        <option value="Лаптоп">Лаптоп</option>
                                        <option value="Таблет">Таблет</option>
                                        <option value="Телефон">Телефон</option>
                                        <option value="Смарт часовник">Смарт часовник</option>
                                        <option value="Аксесоар">Аксесоар</option>
                                    </select>                                    
                                </div>
                                <div className="col-md-12">
                                    <input
                                        className={styles.contactus}
                                        placeholder="Модел"
                                        type="text"
                                        name="model"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        className={styles.contactus}
                                        placeholder="Година"
                                        type="number"
                                        name="year"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        className={styles.contactus}
                                        placeholder="Описание"
                                        type="text"
                                        name="description"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        className={styles.contactus}
                                        placeholder="Цена"
                                        type="number"
                                        name="price"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        className={styles.contactus}
                                        placeholder="Добави снимка"
                                        type="text"
                                        name="img"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        className={styles.contactus}
                                        placeholder="Операционна система"
                                        type="text"
                                        name="os"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <button className={styles.send_btn}>Създай</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}