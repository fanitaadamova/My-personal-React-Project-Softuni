import styles from './RegisterForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';

import { AuthContext } from '../../../../contexts/AuthContext';
import * as authAPI from '../../../../api/authAPI';

const formInitialState = {
  username: '',
  phone: '',
  email: '',
  password: '',
  rePassword: '',
};


export default function RegisterForm() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const isMountedRef = useRef(false);
  const [formValues, setFormValues] = useState(formInitialState);
  const [errors, setErrors] = useState({});
  const [hasServerError, setHasServerError] = useState(false);
  const [serverError, setServerError] = useState({});

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log('Form is updated');
  }, [formValues]);


  const changeHandler = (e) => {
    let value = e.target.value;

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

    authAPI.register(formValues)
      .then(user => {
        setAuth(user);
        navigate('/');
        console.log('sucsses');
      })
      .catch(error => {
        setHasServerError(true);
        setServerError(error.message);
      });

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

  const usernameValidator = () => {
    if (formValues.username.length < 5) {
      setErrors(state => ({
        ...state,
        username: 'Потребителското име трябва да бъде минимум 5 символа!',
      }));
    } else {
      if (errors.username) {
        setErrors(state => ({ ...state, username: '' }));
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


  const rePasswordValidator = () => {
    if (formValues.rePassword != formValues.password) {
      setErrors(state => ({
        ...state,
        rePassword: 'Трябва да е идентична с паролата!',
      }));
    } else {
      if (errors.rePassword) {
        setErrors(state => ({ ...state, rePassword: '' }));
      }
    }
  };

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


            <form id="request" method='POST' className={styles.main_form}
              onSubmit={submitHandler} >
              <div className="row">
                <div className="col-md-12 ">
                  <label htmlFor="username">Потребителско име:</label>
                  <input
                    className={styles.contactus}
                    type="type"
                    name="username"
                    id="username"
                    value={formValues.username}
                    onChange={changeHandler}
                    onBlur={usernameValidator}
                  />

                  {errors.email && (
                    <p className={styles.errorMessage}>{errors.username}</p>
                  )}
                </div>
                <div className="col-md-12">
                  <label htmlFor="email">E-mail адрес:</label>
                  <input
                    className={styles.contactus}
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
                  <label htmlFor="phone">Мобилен номер:</label>
                  <input
                    className={styles.contactus}
                    type="type"
                    name="phone"
                    id="phone"
                    value={formValues.phone}
                    onChange={changeHandler}
                  />
                  {errors.phone && (
                    <p className={styles.errorMessage}>{errors.phone}</p>
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
                  <label htmlFor="rePassword">Повтори парола:</label>
                  <input
                    className={styles.contactus}
                    type="type"
                    name="rePassword"
                    id="rePassword"
                    value={formValues.rePassword}
                    onChange={changeHandler}
                    onBlur={rePasswordValidator}
                  />

                  {errors.rePassword && (
                    <p className={styles.errorMessage}>{errors.rePassword}</p>
                  )}
                </div>
                <div className="col-md-12">

                  <button className={styles.send_btn} type="submit"
                    disabled={(Object.values(errors).some(x => x)
                      || (Object.values(formValues).some(x => x == '')))}
                  >Регистрирай се</button>

                  {hasServerError && (
                    <p className={styles.serverError}>{serverError}</p>
                  )}

                  <div className={styles.go_to_profile}>
                    <p>Имаш профил?</p>
                    <Link className="nav-link" to="/login">Влез</Link>
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