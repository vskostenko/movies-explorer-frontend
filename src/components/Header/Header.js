import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Header.css';
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import LoginNavi from "../LoginNavi/LoginNavi";

function Header(props) {
    let { pathname } = useLocation();
    console.log(props.onModalMenuClick);
    return (
        <>
            <header  className={ pathname === '/' ? 'header' : 'header header_black'}>
                <div className="header__container">
                    <Link to="/movies" className="Link"> 
                        <Logo />
                    </Link>
                    { pathname ==='/' 
                        ? <LoginNavi /> 
                        : <Navigation 
                            onModalMenuClick={props.onModalMenuClick}
                        /> 
                    }
                </div>
            </header>
        </>
    )
};

export default Header;