import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import { Async } from "react-async";
import { set } from "react-hook-form";

function Movies (props) {

    const [ filteredMovies, setfilteredMovies ] = useState([]);
    const [ searchWord, setSearchWord ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

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
        moviesApi.getMovies()
            .then((data)=>{  
                const filteredData = searchWordInArray(searchWord,data);
                console.log(filteredData);
                if (filteredData.length > 0 ) {
                    setfilteredMovies (filteredData)
                } else {
                    console.log('error');
                }
            })
            .catch((err) => {console.log(`Ошибка ${err}`)})
            .finally(() => {setIsLoading(false)})
    }
    return (
        <>
            <Header 
                onModalMenuClick = { props.onModalMenuClick }
            />
            <SearchForm 
                onSubmit = { handleSearch } 
            />
            { isLoading && <Preloader /> }            
            <MoviesCardList allMovies = { filteredMovies }/> 
            <Footer />
        </>
    )
}

export default Movies;