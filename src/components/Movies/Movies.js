import React from "react";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { MOVIES_SERVER_URL } from "../../utils/constants";
import searchWordInArray from "../../utils/searchWordInArray";

function Movies (props) {

    const [ filteredMovies, setfilteredMovies ] =  useState(()=> {
        const movies = localStorage.getItem('filteredData');
        const initalMovies = JSON.parse(movies);
        return initalMovies || [];
    });
    const [ searchWord, setSearchWord ] = useState(()=> {
        const word = localStorage.getItem('searchWord');
        return word || "";
    });
    const [ isShortMovies, setIsShortMovies ] = useState(()=> {
        const checked = localStorage.getItem('checked');
        return JSON.parse(checked) || undefined;
    });
    
function handleSearch (inputs) {
        props.setIsLoading(true);
        localStorage.setItem('searchWord', searchWord);
        moviesApi.getMovies()
            .then((moviesArray)=>{
                const filteredData = searchWordInArray(moviesArray, searchWord)
                if (filteredData.length > 0 ) {
                    setfilteredMovies (filteredData);
                    localStorage.setItem('filteredData', JSON.stringify(filteredData));
                } else {
                    console.log('error');
                    setfilteredMovies([]);
                    localStorage.setItem('filteredData', JSON.stringify(filteredData));
                }
            })
            .catch((err) => {console.log(`Ошибка ${err}`)})
            .finally(() => {
                props.setIsLoading(false);
           })
}

    function addMovieToSaved (movie) {
        mainApi.createMovie(
            {   
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: MOVIES_SERVER_URL + movie.image.url,
                trailerLink: movie.trailerLink,
                thumbnail: MOVIES_SERVER_URL + movie.image.formats.thumbnail.url || "",
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }
        )
        .then((newMovie) => props.setSavedMovies ([...props.savedMovies, newMovie]))
        .catch((err)=> console.log(err))       
    }
    function updateSearchWord (event) {
        setSearchWord(event.target.value);
    }
    function checkboxHandler () {
        setIsShortMovies(!isShortMovies);
        localStorage.setItem("checked",!isShortMovies);
    }
    return (
        <>
            <Header
                onModalMenuClick = { props.onModalMenuClick }
                onModalMenuClose = { props.onModalMenuClose }
                loggedIn = {props.loggedIn}
            />

                <SearchForm 
                    isShortMovies={isShortMovies}
                    checkboxHandler={checkboxHandler}
                    onSubmit = { handleSearch } 
                    searchWord = { searchWord }
                    onInputChange = {updateSearchWord}
                />
        
            { !props.isLoading 
                ?     
                            <MoviesCardList 
                                allMovies = { filteredMovies }
                                isShortMovies={ props.isShortMovies }
                                onSaveMovie={addMovieToSaved}
                                onRemoveMovie={props.onRemoveMovie}
                                savedMovies={props.savedMovies}
                            />
                : <Preloader />
            }
            <Footer />
        </>
    )
}

export default Movies;