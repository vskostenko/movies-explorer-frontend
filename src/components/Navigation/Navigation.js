import React from "react";
import "./Navigation.css";
import AccButton from "../AccButton/AccButton";

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
                <AccButton />
            </li>
        </nav>
        </>
    )
}

export default Navigation;