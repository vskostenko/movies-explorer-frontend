import React from "react";
import "./AccButton.css";
import { Link } from "react-router-dom";

function AccButton () {

    return (
            <Link to="/profile" className="link">
                <button className="accbutton">
                    <p className="accbutton__text">Аккаунт</p>
                    <div className="accbutton__icon"></div>                    
                </button>
            </Link>
        )
}

export default AccButton;