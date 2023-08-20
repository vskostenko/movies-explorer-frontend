import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox (props) {
    return (
        <div className="filtercheckbox">
                <input className="filtercheckbox__input" 
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    defaultChecked={props.isShortMovies}
                    onChange={props.checkboxHandler}
                    />
                <label className="filtercheckbox__label" htmlFor="checkbox" />
                <label className="filtercheckbox__text" htmlFor="checkbox">
                    Короткометражки
                </label>
        </div>
    )
}

export default FilterCheckbox;