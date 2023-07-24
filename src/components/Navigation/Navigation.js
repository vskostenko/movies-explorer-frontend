import React from "react";
import "./Navigation.css";
import accIcon from "../../images/acc-icon.png";

function Navigation () {
    return (
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
    )
}

export default Navigation;