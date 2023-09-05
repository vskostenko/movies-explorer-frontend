import React, {useEffect, useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import searchWordInArray from "../../utils/searchWordInArray";

function SavedMovies ({
    onModalMenuClick,
    onModalMenuClose,
    loggedIn,
    isShortMovies,
    checkboxHandler,
    removeMoviefromSaved,
    savedMovies,
    onRemoveMovie,
    isLoading
}) {
    const [ filteredMoviesSaved, setfilteredMoviesSaved ] =  useState(savedMovies);
    const [ savedSearchWord, setSavedSearchWord ] = useState('');
    const [ isShortMoviesSaved, setIsShortMoviesSaved ] = useState(false);
    useEffect (()=> {
        setfilteredMoviesSaved(searchWordInArray(savedMovies, savedSearchWord));
    },[savedMovies, savedSearchWord])

    function updateFilterSaved (event) {
        setSavedSearchWord(event.target.value);
    }
    function checkboxHandlerSaved () {
        setIsShortMoviesSaved(!isShortMoviesSaved);
    }
    function handleSearch () {   
    }
    return (
        <>
            <Header 
                onModalMenuClick = { onModalMenuClick }
                onModalMenuClose = { onModalMenuClose }
                loggedIn = { loggedIn }
            />
            <SearchForm 
                isShortMovies={false}
                checkboxHandler={checkboxHandlerSaved}
                onSubmit = { handleSearch }
                searchWord = {''}
                onInputChange = {updateFilterSaved}
            />
            <MoviesCardList 
                allMovies = { filteredMoviesSaved }
                isShortMovies={ isShortMoviesSaved }
                savedMovies={savedMovies}
                onRemoveMovie={onRemoveMovie}
                isLoading={isLoading}
            /> 
            <Footer />
        </>
    )
}

export default SavedMovies;