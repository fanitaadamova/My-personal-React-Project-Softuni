import styles from './LoginForm.module.css';

import { useState } from 'react';


export default function LoginForm() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const emailChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const resetFormHandler = () => {
    setEmailValue('');
    setPasswordValue('');
  };

  const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const submitHandler = () => {
    console.log(emailValue);
    console.log(passwordValue);
    resetFormHandler();
  };






  
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
                  <label htmlFor="email">E-mail адрес:</label>
                  <input
                    className={styles.contactus}
                    type="type"
                    name="email"
                    id="email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={() => console.log('onBlur')}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="password">Парола:</label>
                  <input
                    className={styles.contactus}
                    type="type"
                    name="password"
                    id="password"
                    value={passwordValue}
                    onChange={passwordChangeHandler}
                    onBlur={() => console.log('onBlur')}
                  />
                </div>

                <div className="col-md-12">
                  <button className={styles.send_btn} type="button" onClick={submitHandler}>Вход</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}