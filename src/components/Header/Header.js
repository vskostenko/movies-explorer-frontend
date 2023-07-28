import React from "react";
import Logo from "../Logo/Logo";
import './Header.css';
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import LoginNavi from "../LoginNavi/LoginNavi";

function Header() {
    let { pathname } = useLocation();
    return (
        <>
            <header  className={ pathname === '/' ? 'header' : 'header header_black'}>
                <div className="header__container">
                    <Logo />
                    { pathname ==='/' ? <LoginNavi /> : <Navigation /> }
                </div>
            </header>
        </>
    )
};

export default Header;