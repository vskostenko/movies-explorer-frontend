import React from "react";
import "./Register.css";
import logoImg from "../../images/logo.svg";
import { Link } from "react-router-dom";


function Register () {
    function handleChange(){

    }
    function handleSubmit(){

    }
    return (
        <main>
            <div className="register">
                <form className="register__form">
                    <img src={logoImg} alt="logo"/>
                    <h2 className="register__greet">Добро пожаловать!</h2>
                    <p className="register__field-caption">Имя</p>
                    <input className="register__field" type="name" name="name" required placeholder="Виталий?"  autoComplete="off" onChange={handleChange}/>
                    <p className="register__field-caption">E-mail</p>
                    <input className="register__field" type="email" name="email" required placeholder="pochta@yandex.ru"  autoComplete="off" onChange={handleChange}/>
                    <p className="register__field-caption">Пароль</p>
                    <input className="register__field register__field_red" type="password" name="password" required placeholder="" autoComplete="off" onChange={handleChange}/>
                    <span className="register__error" id="email-error">Что-то пошло не так</span>
                    <input className="register__button" type="submit" value="Зарегистрироваться" onSubmit={handleSubmit}/>
                </form>
                <p className='register__signin'>Уже зарегистрированы?
                    <Link to='/signin' className='link link_blue'>&nbsp;Войти</Link>
                </p>
            </div>
        </main>
    )
}

export default Register;