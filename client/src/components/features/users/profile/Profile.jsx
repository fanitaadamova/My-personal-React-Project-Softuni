import styles from './Profile.module.css';

export default function Profile() {

    return (

        <section className={styles.profile}>
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
                                        <p className="text-muted mb-0">Johnatan Smith</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">E-mail адрес</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">example@example.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Мобилен номер</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(097) 234-5678</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}