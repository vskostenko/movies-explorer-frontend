import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies (props) {

    const [ filteredMovies, setfilteredMovies ] = useState([]);
    const [ searchWord, setSearchWord ] = useState('');
    useEffect (() => {
        console.log(props.allMovies);
        searchWordInArray(searchWord,props.allMovies);
        setfilteredMovies (searchWordInArray(searchWord,props.allMovies));
        }, [searchWord]
    );
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

function handleSearch (data) {
        setSearchWord(data.searchField);
        console.log(searchWord);
        
    }
    return (
        <>
            <Header 
                onModalMenuClick = { props.onModalMenuClick }
            />
            <SearchForm 
                onSubmit = { handleSearch } 
            />
            <Preloader />
            <MoviesCardList 
                allMovies = { filteredMovies }
            />
            <Footer />
        </>
    )
}

export default Movies;