import React from "react";
import Logo from "../Logo/Logo";
import './Header.css';
import { Link, Route, Switch, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";



function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <Logo />
                    <Navigation />
                    <nav className="header__login">
                            <Link className="header__link link"> 
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