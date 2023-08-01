import React from "react";
import findIcon from "../../images/find.svg";
import "./SearchForm.css";  
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm () {
    function handleChange() {

    }
    return (
        <div className="searhform" >
            <form className="searchform__container">
                <input className="searchform__field" type="film" name="film" required placeholder="Фильм"  autoComplete="off" onChange={handleChange}/>
                <input className="searhform__button" type="submit" value=" " />
            </form>
            <FilterCheckbox />
        </div>
    )
}
export default SearchForm;