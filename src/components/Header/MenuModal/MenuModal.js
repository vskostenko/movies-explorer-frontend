import React from "react";
import "./MenuModal.css"
import AccButton from "../../AccButton/AccButton";

function MenuModal (props) {

    return (
        <div className= {`menumodal ${props.isModalMenuOpen && 'menumodal_opened'}`}>
        <div className="menumodal__container">
            <button onClick={props.onMenuModalClose} className="menumodal_closebutton"/>
            <nav className="menumodal_navlist">
                <li className="menumodal__item">
                    <a className="menumodal__link link" href="http://localhost">Главная</a>
                </li>
                <li className="menumodal__item">
                    <a className="menumodal__link link" href="http://localhost">Фильмы</a> 
                </li>
                <li className="menumodal__item">
                    <a className="menumodal__link link" href="http://localhost">Сохраненные Фильмы</a>                 
                </li>
            </nav> 
            <AccButton />
        </div>
        </div>
    )
}
export default MenuModal;