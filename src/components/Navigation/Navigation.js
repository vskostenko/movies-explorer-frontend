import React from "react";
import "./Navigation.css";
import accIcon from "../../images/acc-icon.png";

function Navigation () {
    return (
        <nav className="navigation">
            <li className="navigation__item link">Фильмы</li>
            <li className="navigation__item link">Сохранённые фильмы</li>
            <li className="navigation__item link">Аккаунт
                <img className="navigation__icon" src={accIcon} alt="account" />
            </li>
        </nav>
    )
}

export default Navigation;