import React from "react";
import "./Register.css";
import { Link, Navigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { EMAIL_REGEX } from "../../utils/constants";
import Logo from "../Logo/Logo";

function Register ({ handleRegister, handleLogin, loggedIn, isLoading }) {
    const  { values, handleChange, errors, isValid }  = useFormWithValidation();

    function handleSubmit(e){
        e.preventDefault();
        handleRegister({
            name: values.name,
            email: values.email,
            password: values.password
        }).then((res)=> {
            if (res) {
            handleLogin({
                email: values.email,
                password: values.password,
            })
        }
        });
    }
    return (
        <main>
            <div className="register">
                {loggedIn && (
                      <Navigate to="/movies" replace={true} />
                    )}
                <form className="register__form" onSubmit={handleSubmit} >
                    <Logo />
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
                        pattern={EMAIL_REGEX}
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
                        minLength={8}
                        maxLength={20}
                        errors={errors}
                        isValid={isValid}
                    />
                    <div className="register__error" id="email-error">{errors.password}</div>
                    <input 
                        className={(!isValid || isLoading)
                            ? "register__button register__button_disabled"
                            : "register__button "}
                        type="submit"
                        value={isLoading
                            ? `Регистрируем` 
                            : `Зарегистрироваться`}
                        onSubmit={handleSubmit}
                        disabled={!isValid || isLoading}
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