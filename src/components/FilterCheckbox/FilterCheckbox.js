import React from "react";
import "./FilterCheckbox.css";
import checkboxIcon from "../../images/checkbox.png"

function FilterCheckbox () {
    return (
        <div className="filtercheckbox">
                <input className="filtercheckbox__input" 
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    />
                <label className="filtercheckbox__label" htmlFor="checkbox" />
                <label className="filtercheckbox__text" htmlFor="checkbox">
                    Короткометражки
                </label>
        </div>
    )
}

export default FilterCheckbox;