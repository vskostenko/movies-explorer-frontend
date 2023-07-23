import React from "react";
import findIcon from "../../images/find.svg";
import "./SearchForm.css";  
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm () {
    function handleChange() {

    }
    return (
        <>
            <div className="searchform__container">
                <input className="searchform__field" type="film" name="film" required placeholder="Фильм"  autoComplete="off" onChange={handleChange}/>
                <button className="searhform__button">
                    <img className="searchform__icon" src={findIcon} alt="search"/>
                </button>
            </div>
            <FilterCheckbox />
        </>
    )
}
export default SearchForm;