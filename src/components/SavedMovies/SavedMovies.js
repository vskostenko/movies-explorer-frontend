import React, {useEffect, useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import searchWordInArray from "../../utils/searchWordInArray";

function SavedMovies ({
    onModalMenuClick,
    loggedIn,
    isShortMovies,
    checkboxHandler,
    removeMoviefromSaved,
    savedMovies,
    onRemoveMovie
}) {
    const [ filteredMoviesSaved, setfilteredMoviesSaved ] =  useState(savedMovies);
    const [ savedSearchWord, setSavedSearchWord ] = useState('');
    useEffect (()=> {
        setfilteredMoviesSaved(searchWordInArray(savedMovies, savedSearchWord));
    },[savedMovies, savedSearchWord])

    function updateFilterSaved (event) {
        setSavedSearchWord(event.target.value);
    }
    function handleSearch () {
        
    }
    return (
        <>
            <Header 
                onModalMenuClick = { onModalMenuClick }
                loggedIn = { loggedIn }
            />
            <SearchForm 
                isShortMovies={false}
                checkboxHandler={checkboxHandler}
                onSubmit = { handleSearch }
                searchWord = {''}
                onInputChange = {updateFilterSaved}
            />
            <MoviesCardList 
                allMovies = { filteredMoviesSaved }
                isShortMovies={ isShortMovies }
                savedMovies={savedMovies}
                onRemoveMovie={onRemoveMovie}
            /> 
            <Footer />
        </>
    )
}

export default SavedMovies;