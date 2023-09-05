import React from "react";
import "./AccButton.css";
import { Link } from "react-router-dom";
import accIcon from "../../images/acc-icon.svg";

function AccButton (props) {

    return (
            <Link to="/profile" className="link" onClick={props.onMenuModalClose}>
                <button className="accbutton">
                    <p className="accbutton__text">Аккаунт</p>
                    <img src={accIcon} className="accbutton__icon" alt="account" />                  
                </button>
            </Link>
        )
}

export default AccButton;