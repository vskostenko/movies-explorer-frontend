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
import getMovies from "../../utils/MoviesApi";

function App() {

    const [ isModalMenuOpen, setModalMenuOpen ] = useState(false);
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        handleSearch()
    }, []);

    function handleSearch () {
        getMovies().then ((data)=>{setAllMovies(data)});
        console.log(allMovies);
    }
    function openMenuModal () {
        setModalMenuOpen(true);
        console.log('click');
    }; 
    function closeMenuModal () {
        setModalMenuOpen(false);
    };
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
                            onModalMenuClick={openMenuModal}
                            onModalMenuClose={closeMenuModal}
                        />} 
                    />
                    <Route path="/saved-movies" 
                        element={<Movies 
                            onModalMenuClick={openMenuModal}
                            onModalMenuClose={closeMenuModal}
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