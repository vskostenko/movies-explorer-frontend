import React from "react";
import Logo from "../Logo/Logo";
import './Header.css';
import { Link } from "react-router-dom";



function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <Logo />
                    <nav className="header__login">
                            <Link className="header__link"> 
                                Регистрация
                            </Link>   
                            <button className="header__button">
                                Войти
                            </button>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default Header;