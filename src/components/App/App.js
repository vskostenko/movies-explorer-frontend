import React, { useState,useEffect }  from "react";
import "./App.css";
import Main from "../Main/Main";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import MenuModal from "../Header/MenuModal/MenuModal";
import ErrorPage from "../ErrorPage/ErrorPage";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../../utils/ProtectedRoute";

function App() {

    const [ isModalMenuOpen, setModalMenuOpen ] = useState(false);
    const [ isShortMovies, setIsShortMovies ] = useState(()=> {
        const checked = localStorage.getItem('checked');
        return JSON.parse(checked) || undefined;
    });
    const [ searchedMovies, setSearchedMovies ] = useState(()=> {
        const movies = localStorage.getItem('filteredData');
        const initalMovies = JSON.parse(movies);
        return initalMovies || "";
    });
    const [loggedIn,setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            checkToken();
        } else {
            handleLogout();
        }
      }, []);
      

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
    function checkToken() {
        mainApi.checkToken()
          .then((res) => {
                console.log(res);
                setLoggedIn(true);
                setCurrentUser(res);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    function handleRegister (userData){
        console.log(userData);
        return mainApi.register(userData)
        .catch((err)=> console.log(err))
    }
    function handleLogin (userData) {
        mainApi.login(userData)
        .then((res)=> {
            console.log(res);
            if (res.token) {
                localStorage.setItem('jwt', res.token);
                checkToken();
              }
            })
        .catch((err)=> console.log(err))
    }
    function handleUpdateUserInfo(data) {
        console.log(data);
            mainApi
              .editUserInfo(data)
              .then((user) => {
                console.log(user);
                setCurrentUser({
                  name: user.name,
                  email: user.email,
                });
              })              
             .catch((err)=> console.log(err))
          }
    function handleLogout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('filteredData');
        localStorage.removeItem('searchWord');
        localStorage.removeItem('checked');
        setLoggedIn(false);
        setCurrentUser({
          _id: '',
          name: '',
          email: '',
        });
    }
    return (
        <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
            <BrowserRouter>
                <div className="page">
                    <Routes>
                        <Route 
                            path="/signin" 
                            element={<Login
                                handleLogin={handleLogin}
                                loggedIn={loggedIn} 
                            />} 
                        />
                        <Route 
                            path="/signup" 
                            element={<Register 
                                handleRegister={handleRegister}
                                loggedIn={loggedIn}
                                handleLogin={handleLogin}
                            />}
                        />
                        <Route path="/profile" element={<Profile
                             loggedIn={loggedIn} 
                             onLogout={handleLogout}
                             onUpdateUser={handleUpdateUserInfo}
                             />} 
                        />
                        <Route path="/error" element={<ErrorPage/>} />
                        <Route path="/movies" 
                            element={
                                <ProtectedRoute loggedIn={loggedIn}>
                                    <Movies 
                                        onModalMenuClick = {openMenuModal}
                                        onModalMenuClose = {closeMenuModal}
                                        isShortMovies={isShortMovies}
                                        checkboxHandler={checkboxHandler}
                                        movies={searchedMovies}
                                        loggedIn={loggedIn}
                                    />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/saved-movies" 
                            element={
                            <ProtectedRoute loggedIn={loggedIn}>
                            <Movies 
                                onModalMenuClick={openMenuModal}
                                onModalMenuClose={closeMenuModal}
                                isShortMovies={isShortMovies}
                                checkboxHandler={checkboxHandler}
                                loggedIn={loggedIn}
                            />
                            </ProtectedRoute>
                            } 
                        />
                        <Route index element={<Main loggedIn={loggedIn} />} />
                    </Routes>
                    <MenuModal 
                        isModalMenuOpen={isModalMenuOpen} 
                        onMenuModalClose={closeMenuModal} 
                    />
                </div>
            </BrowserRouter>
        </CurrentUserContext.Provider>
    )
}
export default App;