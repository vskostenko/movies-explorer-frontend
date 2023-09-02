import { useForm } from "react-hook-form" 
import React, { useEffect } from "react";
import "./SearchForm.css";  
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm (props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();   
    const onSubmit = (data) => {
        props.onSubmit(data);
    };
    return (
        <div className="searhform" >
            <form 
                className="searchform__container"
                onSubmit={handleSubmit(onSubmit)}
                >
                <input
                    placeholder="Фильм"
                    defaultValue={props.searchWord}
                    {...register("searchField", { required: true })} 
                    className="searchform__field"
                    onChange={props.onInputChange}
                />
                {errors.searchField && <span>Нужно ввести ключевое слово</span>}
                <input 
                    className="searhform__button" 
                    type="submit"
                    value=" "
                />
            </form>
            <FilterCheckbox 
                isShortMovies={props.isShortMovies}
                checkboxHandler={props.checkboxHandler}
            />
        </div>
    )
}
export default SearchForm;