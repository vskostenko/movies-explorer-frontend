import React from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { EMAIL_REGEX } from "../../utils/constants";
import Logo from "../Logo/Logo";

function Login ({handleLogin, loggedIn, isLoading}) {
    const  { values, handleChange, errors, isValid }  = useFormWithValidation();
    
    function handleSubmit(e){
        e.preventDefault();
        handleLogin({
            email: values.email,
            password: values.password
        })
    }
    return (
            <div className="login">
                {loggedIn && (
                      <Navigate to="/movies" replace={true} />
                    )}
                <form className="login__form" onSubmit={handleSubmit}>
                    <Logo />
                    <h2 className="login__greet">Рады видеть!</h2>
                    <p className="login__field-caption">E-mail</p>
                    <input 
                        className="login__field"
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
                    <div 
                        className="login__error" 
                        id="email-error">
                        {errors.email}
                    </div>
                    <p className="login__field-caption">Пароль</p>
                    <input 
                        className="login__field" 
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
                    <div 
                        className="login__error" 
                        id="email-error">
                        {errors.password}
                    </div>
                    <input 
                        className={(!isValid || isLoading)
                            ? "login__button login__button_disabled"
                            : "login__button"
                        }

                        type="submit" 
                        value={isLoading
                            ? `Загрузка` 
                            : `Войти`}
                        onSubmit={handleSubmit}
                        disabled={!isValid || isLoading}
                    />
                </form>
                <p className='login__signin'>Ещё не зарегистрированы?
                    <Link to='/signup' className='link link_blue'>&nbsp;Регистрация</Link>
                </p>
            </div>
    )
}

export default Login;