import React, { useContext, useState, useEffect } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Profile (props) {
    const { currentUser } = useContext(CurrentUserContext);
    const { values,setValues, handleChange, errors, isValid, resetForm}  = useFormWithValidation();
    const [ isInputActive, setIsInputActive ] = useState(false);
    const [ buttonCaption, setButtonCaption ] = useState('Редактровать');
    const navigate = useNavigate();
    useEffect(() => {
        setValues({
          name: currentUser.name,
          email: currentUser.email,
        });
      }, []) 
    function handleLogout () {
        props.onLogout();
        navigate("/signin", { replace: true });
    }
    function handleEdit (e) {
        e.preventDefault();
        if (!isInputActive) {
            setValues({
                email:'',
                name:'',
            })
            setIsInputActive(true);
            setButtonCaption('Сохранить');
        } else {
            props.onUpdateUser({
                name: values.name,
                email: values.email,
            });
            setValues ({
                name: currentUser.name,
                email: currentUser.email,
              })
            setButtonCaption('Редактировать');
            setIsInputActive(false);
        }
    }
    return (
        <>
            <Header 
                loggedIn={props.loggedIn}
                onModalMenuClick = { props.onModalMenuClick }
                onModalMenuClose = { props.onModalMenuClose }                
                />
            <form className="profile">
                
                <h3 className="profile__greet">Привет, {currentUser.name}</h3>
                <div className="profile__data-container">
                    <p className="profile__data-text profile__data-text-fat">Имя</p>
                    <input 
                        className="profile__input"
                        type="text"
                        name="name"
                        required
                        autoComplete="off"
                        minLength={4}
                        maxLength={40}
                        onChange={handleChange}
                        errors={errors}
                        isValid={isValid}
                        readOnly={!isInputActive}
                        value={values["name"] || ""}
                        placeholder="Введите Имя"
                    />
                </div>
                <div className="profile__input-error">{errors.name}</div>
                <div className="profile__data-container">
                    <p className="profile__data-text profile__data-text-fat">E-mail</p>
                    <input 
                        className="profile__input"
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        minLength={4}
                        maxLength={40}
                        onChange={handleChange}
                        errors={errors}
                        isValid={isValid}
                        readOnly={!isInputActive}
                        value={values["email"] || ""}
                        placeholder="Введите e-mail"
                    />
                </div>
                <div className="profile__input-error">{errors.email}</div>
                <button 
                    className="profile__button link"
                    disabled={!isValid && isInputActive}
                    onClick={handleEdit}>
                        {buttonCaption}
                </button>
                <button 
                    className="profile__button link link_red"
                    onClick={handleLogout}>
                        Выйти из аккаунта
                </button>
            </form>
        </>
    )
}
export default Profile;
