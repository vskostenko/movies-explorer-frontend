import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { MOVIES_SERVER_URL } from "../../utils/constants";


function Movies (props) {
    const [ savedMovies, setSavedMovies ] = useState([]);
    const [ filteredMovies, setfilteredMovies ] =  useState(()=> {
        const movies = localStorage.getItem('filteredData');
        const initalMovies = JSON.parse(movies);
        return initalMovies || "";
    });
    const [ searchWord, setSearchWord ] = useState(()=> {
        const word = localStorage.getItem('searchWord');
        return word || "";
    });
    const [ isLoading, setIsLoading ] = useState(true);
    let { pathname } = useLocation();
    useEffect (() => {
        mainApi.getMovies()
        .then ((movies) => {
            setSavedMovies(movies);
            setIsLoading(false);
        })
        .catch((err) => console.log(err));
    },[])


function searchWordInArray(word, array) {
        // Преобразуем слово в нижний регистр для поиска без учета регистра
        const searchWord = word.toLowerCase();
        
        // Используем метод filter для фильтрации массива объектов
        const filteredArray = array.filter(obj => {
        // Проверяем, содержит ли значение свойства объекта искомое слово
        for (let key in obj) {
        if (typeof obj[key] === 'string' && obj[key].toLowerCase().includes(searchWord)) {
        return true;
        }
        }
        return false;
        });     
        return filteredArray;
    }

function handleSearch (inputs) {
        setIsLoading(true);
        setSearchWord(inputs.searchField);
        localStorage.setItem('searchWord', inputs.searchField);  
        moviesApi.getMovies()
            .then((data)=>{  
                const filteredData = searchWordInArray(searchWord,data);
                console.log(filteredData);
                if (filteredData.length > 0 ) {
                    setfilteredMovies (filteredData);
                    localStorage.setItem('filteredData', JSON.stringify(filteredData));
                } else {
                    console.log('error');
                    setfilteredMovies([]);
                }
            })
            .catch((err) => {console.log(`Ошибка ${err}`)})
            .finally(() => {setIsLoading(false)})
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
        .then((newMovie) => setSavedMovies ([...savedMovies, newMovie]))
        .catch((err)=> console.log(err))       
    }
    function removeMoviefromSaved (movie) {
        console.log(movie);
        console.log(savedMovies);

        const savedMovieId = savedMovies.find((item) => item.movieId === (movie.movieId ?? movie.id))._id;
        mainApi
        .removeMovie(savedMovieId)
        .then(() => {
            
          setSavedMovies((movies) =>
            movies.filter((item) => item._id !== savedMovieId)
          );
        })
        .catch((err)=> console.log(err))       
    }

    return (
        <>
            <Header 
                onModalMenuClick = { props.onModalMenuClick }
            />
            <SearchForm 
                isShortMovies={props.isShortMovies}
                checkboxHandler={props.checkboxHandler}
                onSubmit = { handleSearch }
                searchWord = { searchWord }
            />
            { !isLoading 
                ?    pathname ==='/saved-movies' 
                        ?   <MoviesCardList 
                                allMovies = { savedMovies }
                                isShortMovies={ props.isShortMovies }
                                savedMovies={savedMovies}
                                onRemoveMovie={removeMoviefromSaved}
                            /> 
                        :   <MoviesCardList 
                                allMovies = { filteredMovies }
                                isShortMovies={ props.isShortMovies }
                                onSaveMovie={addMovieToSaved}
                                onRemoveMovie={removeMoviefromSaved}
                                savedMovies={savedMovies}
                            />
                : <Preloader />
            }
            <Footer />
        </>
    )
}

export default Movies;