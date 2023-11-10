import styles from './RegisterForm.module.css';

export default function RegisterForm() {
    return (
<div className={styles.register}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className={styles.titlepage}>
          <h2>Регистрация</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <form id="request" className={styles.main_form}>
          <div className="row">
            <div className="col-md-12 ">
              <input
                className={styles.contactus}
                placeholder="Име"
                type="type"
                name="Name"
              />
            </div>
            <div className="col-md-12">
              <input
                className={styles.contactus}
                placeholder="Твоят имейл"
                type="type"
                name="Email"
              />
            </div>
            <div className="col-md-12">
              <input
                className={styles.contactus}
                placeholder="Мобилен номер"
                type="type"
                name="Phone Number"
              />
            </div>
            <div className="col-md-12">
            <input
                className={styles.contactus}
                placeholder="Парола"
                type="type"
                name="password"
              />
            </div>
            <div className="col-md-12">
            <input
                className={styles.contactus}
                placeholder="Повтори парола"
                type="type"
                name="re-password"
              />
            </div>
            <div className="col-md-12">
              <button className={styles.send_btn}>Регистрирай се</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
}