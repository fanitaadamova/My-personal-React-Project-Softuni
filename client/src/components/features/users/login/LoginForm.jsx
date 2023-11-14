import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

import { useEffect, useRef, useState } from 'react';

const formInitialState = {
  email: '',
  password: '',
};

export default function LoginForm() {
  // const emailInputRef = useRef();
  const isMountedRef = useRef(false);
  const [formValues, setFormValues] = useState(formInitialState);
  const [errors, setErrors] = useState({});

  // за фокусиране на полето при зареждане на страницата
  // useEffect(() => {
  //   emailInputRef.current.focus();
  // }, []);



  // Executes only on update
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log('Form is updated');
  }, [formValues]);



  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log('Form is updated');
  }, [formValues]);


  const changeHandler = (e) => {
    let value = '';
    if (e.target.type) {
      value = e.target.value;
    }

    setFormValues(state => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFormHandler = () => {
    setFormValues(formInitialState);
    setErrors({});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    resetFormHandler();
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const emailValidator = () => {
    if (!validateEmail(formValues.email)) {
      setErrors(state => ({
        ...state,
        email: 'Email адреса не е валиден формат!',
      }));
    } else {
      if (errors.email) {
        setErrors(state => ({ ...state, email: '' }));
      }
    }
  };

  const passwordValidator = () => {
    if (formValues.password.length < 5) {
      setErrors(state => ({
        ...state,
        password: 'Паролата трябва да бъде минимум 5 символа!',
      }));
    } else {
      if (errors.password) {
        setErrors(state => ({ ...state, password: '' }));
      }
    }
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


            <form id="request" className={styles.main_form}
              onSubmit={submitHandler} >
              <div className="row">

                <div className="col-md-12">
                  <label htmlFor="email">E-mail адрес:</label>
                  <input
                    className={styles.contactus}
                    // ref={emailInputRef}
                    type="type"
                    name="email"
                    id="email"
                    value={formValues.email}
                    onChange={changeHandler}
                    onBlur={emailValidator}
                  />
                  {errors.email && (
                    <p className={styles.errorMessage}>{errors.email}</p>
                  )}
                </div>

                <div className="col-md-12">
                  <label htmlFor="password">Парола:</label>
                  <input
                    className={styles.contactus}
                    type="type"
                    name="password"
                    id="password"
                    value={formValues.password}
                    onChange={changeHandler}
                    onBlur={passwordValidator}
                  />

                  {errors.password && (
                    <p className={styles.errorMessage}>{errors.password}</p>
                  )}
                </div>

                <div className="col-md-12">
                  <button className={styles.send_btn} type="submit"
                    disabled={(Object.values(errors).some(x => x))
                      || (formValues.email == '' || formValues.password == '')}
                  >Влез</button>
                  <div className={styles.no_profile}>
                    <p>Нямаш профил?</p>
                    <Link className="nav-link" to="/register">Регистрация</Link>
                  </div>

                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}