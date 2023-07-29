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

function App() {

    const [ isModalMenuOpen, setModalMenuOpen ] = useState(false);

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