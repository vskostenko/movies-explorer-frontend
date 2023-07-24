import React from "react"
import { Link } from "react-router-dom";
import "./LoginNavi.css";

function LoginNavi() {
    return (
    <nav className="loginnavi__login">
        <Link className="loginnavi__link link"> 
            Регистрация
        </Link>   
        <button className="loginnavi__button">
            Войти
        </button>
    </nav>
    )
}

export default LoginNavi;