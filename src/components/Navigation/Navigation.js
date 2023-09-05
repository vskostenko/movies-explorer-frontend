import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import AccButton from "../AccButton/AccButton";

function Navigation (props) {

    return (
        <>
        <button className="navigation__modal-button link" onClick={ props.onModalMenuClick }>
            <div className="navigation__menu-icon"></div>
        </button>
        <nav className="navigation">
            <Link to="/movies" className="link">            
                <li className="navigation__item">Фильмы</li>
            </Link>
            <Link to="/saved-movies" className="link">  
                <li className="navigation__item">Сохранённые фильмы</li>  
            </Link>  
                <li className="navigation__item link">
                    <AccButton />
                </li>
        </nav>
        </>
    )
}

export default Navigation;