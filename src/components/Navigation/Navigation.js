import React from "react";
import "./Navigation.css";

function Navigation () {
    return (
        <>
        <button className="navigation__modal-button link">
            <div className="navigation__menu-icon"></div>
        </button>
        <nav className="navigation">
            <li className="navigation__item link">Фильмы</li>
            <li className="navigation__item link">Сохранённые фильмы</li>    
            <li className="navigation__item link">
                <button className="navigation__button">
                    <p className="navigation__button-text">Аккаунт</p>
                    <div className="navigation__icon"></div>                    
                </button> 
            </li>
        </nav>
        </>
    )
}

export default Navigation;