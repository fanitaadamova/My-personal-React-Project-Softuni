import styles from './LoginForm.module.css';


export default function LoginForm() {
    return (
<div className={styles.login}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className={styles.titlepage}>
          <h2> В Х О Д </h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <form id="request" className={styles.main_form}>
          <div className="row">

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
                placeholder="Парола"
                type="type"
                name="password"
              />
            </div>

            <div className="col-md-12">
              <button className={styles.send_btn}>Вход</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
}