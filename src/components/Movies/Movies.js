import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies (props) {

    const [searchWord, setSearchWord] = useState('');
    useEffect (() => {
        console.log(searchWord);
        }, [searchWord]
    )

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
            <MoviesCardList 
                allMovies = { props.allMovies }
            />
            <Footer />
        </>
    )
}

export default Movies;