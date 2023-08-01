import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies (props) {
    return (
        <>
            <Header 
                onModalMenuClick={props.onModalMenuClick}
            />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}

export default Movies;