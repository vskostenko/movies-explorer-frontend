import React from "react";
import "./InfoToolTip.css";

function InfoToolTip(props) {
    return (
        <section className={props.isInfoTooltipOpen ? "popup popup_opened" : "popup"}>
            <div className="popup__container">
                <div className="popup__infocontainer">
                <button type="button" className="popup__close-button" onClick={props.onToolTipClose}></button>
                <h2 className="popup__caption">{props.infoTooltipMsg}</h2>
                </div>
            </div>
      </section>
    )
}

export default InfoToolTip;