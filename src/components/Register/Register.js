import React from "react";
import "./Register.css";
import logoImg from "../../images/logo.svg";
import { Link, Navigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Register ({ handleRegister, handleLogin, loggedIn }) {
    const  { values, handleChange, errors, isValid, resetForm}  = useFormWithValidation();

    function handleSubmit(e){
        console.log('submit');
        e.preventDefault();
        handleRegister({
            name: values.name,
            email: values.email,
            password: values.password
        }).then((res)=> {
            console.log(res);
            handleLogin({
                email: values.email,
                password: values.password,
            });
        });
    }
    return (
        <main>
            <div className="register">
                {loggedIn && (
                      <Navigate to="/saved-movies" replace={true} />
                    )}
                <form className="register__form" onSubmit={handleSubmit} >
                    <img src={logoImg} alt="logo"/>
                    <h2 className="register__greet">Добро пожаловать!</h2>
                    <p className="register__field-caption">Имя</p>
                    <input 
                        className="register__field"
                        type="text"
                        name="name"
                        required
                        placeholder="Виталий?"
                        autoComplete="off"
                        minLength={4}
                        maxLength={40}
                        onChange={handleChange}
                        errors={errors}
                        isValid={isValid}
                    />
                    <div className="register__error" id="name-error">{errors.name}</div>
                    <p className="register__field-caption">E-mail</p>
                    <input
                        className="register__field"
                        type="email" 
                        name="email"
                        required
                        placeholder="pochta@yandex.ru"
                        autoComplete="off"
                        minLength={4}
                        maxLength={40}
                        onChange={handleChange}
                        errors={errors}
                        isValid={isValid}
                    />
                    <div className="register__error" id="email-error">{errors.email}</div>
                    <p className="register__field-caption">Пароль</p>
                    <input
                        className="register__field register__field_red"
                        type="password"
                        name="password"
                        required
                        placeholder=""
                        autoComplete="off"
                        onChange={handleChange}
                        minLength={4}
                        maxLength={20}
                        errors={errors}
                        isValid={isValid}
                    />
                    <div className="register__error" id="email-error">{errors.password}</div>
                    <input 
                        className="register__button"
                        type="submit"
                        value="Зарегистрироваться"
                        onSubmit={handleSubmit}
                    />
                </form>
                <p className='register__signin'>Уже зарегистрированы?
                    <Link to='/signin' className='link link_blue'>&nbsp;Войти</Link>
                </p>
            </div>
        </main>
    )
}

export default Register;