import React from "react";
import "./MenuModal.css"
import AccButton from "../../AccButton/AccButton";
import { Link } from "react-router-dom";

function MenuModal (props) {



    return (
        <div className= {`menumodal ${props.isModalMenuOpen && 'menumodal_opened'}`}>
            <div className="menumodal__container">
                <button onClick={props.onMenuModalClose} className="menumodal_closebutton"/>
                <nav className="menumodal_navlist">
                    <li className="menumodal__item">
                        <Link to="/" className="menumodal__link link" onClick={props.onMenuModalClose}>Главная</Link>
                    </li>
                    <li className="menumodal__item">
                        <Link to="/movies"  className="menumodal__link link" onClick={props.onMenuModalClose}>Фильмы</Link> 
                    </li>
                    <li className="menumodal__item">
                        <Link to="/saved-movies"  className="menumodal__link link" onClick={props.onMenuModalClose}>Сохраненные Фильмы</Link>                 
                    </li>
                </nav> 
                <AccButton onMenuModalClose={props.onMenuModalClose}/>
            </div>
        </div>
    )
}
export default MenuModal;