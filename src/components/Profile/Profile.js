import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile () {
    return (
        <>
            <Header />

            <div className="profile">
                <div className="profile__greet">Привет, Виталий!</div>
                <div className="profile__data-container">
                    <p className="profile__data-text profile__data-text-fat">Имя</p>
                    <p className="profile__data-text">Виталий</p>
                </div>
                <div className="profile__data-container">
                    <p className="profile__data-text profile__data-text-fat">E-mail</p>
                    <p className="profile__data-text">pochta@yandex.ru</p>
                </div>
                <Link className="profile__link link">Редактировать</Link>
                <Link className="profile__link link link_red">Выйти из аккаунта</Link>
            </div>

        </>
    )
}

export default Profile;
