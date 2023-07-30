import React from "react";
import logoImg from "../../images/logo.svg";
import "./Login.css";
import { Link } from "react-router-dom";

function Login () {
    function handleChange(){

    }
    function handleSubmit(){

    }
    return (
            <div className="login">
                <form className="login__form">
                    <img src={logoImg} alt="logo"/>
                    <h2 className="login__greet">Рады видеть!</h2>
                    <p className="login__field-caption">E-mail</p>
                    <input className="login__field" type="email" name="email" required placeholder="pochta@yandex.ru"  autoComplete="off" onChange={handleChange}/>
                    <p className="login__field-caption">Пароль</p>
                    <input className="login__field" type="password" name="password" required placeholder="" autoComplete="off" onChange={handleChange}/>
                    <span className="login__error" id="email-error"></span>
                    <input className="login__button" type="submit" value="Войти" onSubmit={handleSubmit}/>
                </form>
                <p className='login__signin'>Ещё не зарегистрированы?
                    <Link to='/signup' className='link link_blue'>&nbsp;Регистрация</Link>
                </p>
            </div>
    )
}

export default Login;