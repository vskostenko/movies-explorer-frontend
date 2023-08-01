import React from "react";
import "./AccButton.css";
import { Link } from "react-router-dom";
import accIcon from "../../images/acc-icon.svg";

function AccButton () {

    return (
            <Link to="/profile" className="link">
                <button className="accbutton">
                    <caption className="accbutton__text">Аккаунт</caption>
                    <img src={accIcon} className="accbutton__icon" alt="account" />                  
                </button>
            </Link>
        )
}

export default AccButton;