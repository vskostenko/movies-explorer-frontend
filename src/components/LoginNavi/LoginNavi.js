import React from "react"
import { Link } from "react-router-dom";
import "./LoginNavi.css";

function LoginNavi() {
    return (
    <nav className="loginnavi__login">
        <Link to="/signup" className="loginnavi__link link"> 
            Регистрация
        </Link>   
        <Link to="/signin" className="link">
            <button className="loginnavi__button">
            Войти
            </button>
        </Link>
    </nav>
    )
}

export default LoginNavi;