import React, { useState,useEffect }  from "react";
import "./App.css";
import Main from "../Main/Main";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import MenuModal from "../Header/MenuModal/MenuModal";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useLocalStorage } from "../../utils/userLocalStorage";


function App() {

    const [ isModalMenuOpen, setModalMenuOpen ] = useState(false);
    const [ isShortMovies, setIsShortMovies ] = useState(()=> {
        const checked = localStorage.getItem('checked');
        console.log(checked);
        return JSON.parse(checked) || undefined;
    });
    const [ savedMovies, setSavedMovies ] = useState(()=> {
        const movies = localStorage.getItem('filteredData');
        const initalMovies = JSON.parse(movies);
        return initalMovies || "";
    });

    function openMenuModal () {
        setModalMenuOpen(true);
    }; 
    function closeMenuModal () {
        setModalMenuOpen(false);
    };
    function checkboxHandler () {
        setIsShortMovies(!isShortMovies);
        localStorage.setItem("checked",!isShortMovies);
    }

    return (
        <BrowserRouter>
            <div className="page">
                <Routes>
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/error" element={<ErrorPage/>} />
                    <Route path="/movies" 
                        element={<Movies 
                            onModalMenuClick = {openMenuModal}
                            onModalMenuClose = {closeMenuModal}
                            isShortMovies={isShortMovies}
                            checkboxHandler={checkboxHandler}
                            allMovies={savedMovies}
                        />} 
                    />
                    <Route path="/saved-movies" 
                        element={<Movies 
                            onModalMenuClick={openMenuModal}
                            onModalMenuClose={closeMenuModal}
                            allMovies={savedMovies}
                        />} 
                    />
                    <Route index element={<Main />} />
                </Routes>
                <MenuModal 
                    isModalMenuOpen={isModalMenuOpen} 
                    onMenuModalClose={closeMenuModal} 
                />
            </div>
        </BrowserRouter>
    )
}
export default App;