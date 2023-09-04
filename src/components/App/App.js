import React, { useState,useEffect }  from "react";
import "./App.css";
import Main from "../Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import MenuModal from "../Header/MenuModal/MenuModal";
import ErrorPage from "../ErrorPage/ErrorPage";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../../utils/ProtectedRoute";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import { errors } from "../../utils/errors";
import Preloader from "../Preloader/Preloader";

function App() {
    const [ loggedIn,setLoggedIn ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState({});
    const [ savedMovies, setSavedMovies ] = useState([]);
    const [ isModalMenuOpen, setModalMenuOpen ] = useState(false);
    const [ isInfoTooltipOpen, setInfoTooltipOpen ] = useState(false);
    const [ infoTooltipMsg, setInfoTooltipMsg ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ storedMovies, setStoredMovies] = useState();
    const [ searchedMovies, setSearchedMovies ] = useState(()=> {
        const movies = localStorage.getItem('filteredData');
        const initalMovies = JSON.parse(movies);
        return initalMovies || "";
    }); 

    useEffect(()=> {
        if (loggedIn) {
            setIsLoading(true);
            mainApi.getMovies()
            .then ((movies) => {
                setSavedMovies(movies);
            })
            .catch((err) => showErrorToUser(err))
            .finally(setIsLoading(false))

        }
    },[loggedIn]);
    useEffect(() => {
        if (!loggedIn) {return} 
        else if (localStorage.getItem('allmovies')) {
            setStoredMovies(JSON.parse(localStorage.getItem('allmovies')));
        } else {
            setIsLoading(true);
            moviesApi
              .getMovies()
              .then((movies) => {
                localStorage.setItem('allmovies', JSON.stringify(movies));
                setStoredMovies(movies);
              })
              .catch((err) => showErrorToUser(err))
              .finally(setIsLoading(false));
            }
        }, [loggedIn]);
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
    function checkToken() {
        mainApi.checkToken()
          .then((res) => {
                setLoggedIn(true);
                setCurrentUser(res);
          })
          .catch((err) => {
            showErrorToUser(err);
          });
    }
    function handleRegister (userData){
        setIsLoading(true);
        return mainApi.register(userData)
        .catch((err)=> {
            setInfoTooltipMsg(errors(err));
            setInfoTooltipOpen(true);
        })
        .finally(setIsLoading(false))  
    }
    function handleLogin (userData) {
        setIsLoading(true);
        mainApi.login(userData)
        .then((res)=> {
            if (res.token) {
                localStorage.setItem('jwt', res.token);
                checkToken();
            } else {
                handleLogout();
            }
            })
        .catch((err)=> showErrorToUser(err))
        .finally(setIsLoading(false));
    }
    function handleUpdateUserInfo(data) {
        setIsLoading(true);
        mainApi
        .editUserInfo(data)
        .then((user) => {
            setCurrentUser({
              name: user.name,
              email: user.email,
            });
            setInfoTooltipMsg(`Данные успешно изменены ${user.name}`);
            setInfoTooltipOpen(true);
            })              
        .catch((err)=> {
            setInfoTooltipMsg(errors(err));
            setInfoTooltipOpen(true);
        })
    }
    function handleLogout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('filteredData');
        localStorage.removeItem('searchWord');
        localStorage.removeItem('checked');
        localStorage.removeItem('allmovies');
        setLoggedIn(false);
        setCurrentUser({
          _id: '',
          name: '',
          email: '',
        });
    }
    function toolTipClose(){
        setInfoTooltipOpen(false);
    }
    function removeMoviefromSaved (movie) {
        setIsLoading(true);
        const savedMovieId = savedMovies.find((item) => item.movieId === (movie.movieId ?? movie.id))._id;
        mainApi
        .removeMovie(savedMovieId)
        .then(() => {
            const newMoviesList = savedMovies.filter((item) => {
                if (savedMovieId === item._id) {
                return false
                } else {
                return true
                }
            });
            setSavedMovies(newMoviesList);
        })
        .catch((err)=> showErrorToUser(err))     
        .finally(setIsLoading(false))  
    }
    function showErrorToUser(err) {
        setInfoTooltipMsg(errors(err));
        setInfoTooltipOpen(true);
    }
    return (
        <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
            <BrowserRouter>
                <div className="page">
                    {
                        isLoading && <Preloader />
                    }
                    <Routes>
                        <Route 
                            path="/signin" 
                            element={<Login
                                handleLogin={handleLogin}
                                loggedIn={loggedIn}
                                isLoading={isLoading}
                            />} 
                        />
                        <Route 
                            path="/signup" 
                            element={<Register 
                                handleRegister={handleRegister}
                                loggedIn={loggedIn}
                                handleLogin={handleLogin}
                                isLoading={isLoading}
                            />}
                        />
                        <Route path="/profile" 
                            element={<Profile
                                loggedIn={loggedIn}
                                isLoading={isLoading}
                                onLogout={handleLogout}
                                onUpdateUser={handleUpdateUserInfo}
                                onModalMenuClick = {openMenuModal}
                                onModalMenuClose = {closeMenuModal}
                                />} 
                        />
                        <Route path="/movies" 
                            element={
                                <ProtectedRoute loggedIn={loggedIn}>
                                    <Movies 
                                        onModalMenuClick = {openMenuModal}
                                        onModalMenuClose = {closeMenuModal}
                                        movies={searchedMovies}
                                        loggedIn={loggedIn}
                                        savedMovies={savedMovies}
                                        setSavedMovies={setSavedMovies}
                                        onRemoveMovie={removeMoviefromSaved}
                                        isLoading={isLoading}
                                        setIsLoading={setIsLoading}
                                        storedMovies = {storedMovies}
                                    />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/saved-movies" 
                            element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <SavedMovies 
                                    onModalMenuClick={openMenuModal}
                                    onModalMenuClose={closeMenuModal}
                                    loggedIn={loggedIn}
                                    savedMovies={savedMovies}
                                    setSavedMovies={setSavedMovies}
                                    onRemoveMovie={removeMoviefromSaved}
                                />
                            </ProtectedRoute>
                            } 
                        />
                        <Route index element={<Main 
                            loggedIn={loggedIn}
                            onModalMenuClick = {openMenuModal}
                            onModalMenuClose = {closeMenuModal}
                            />} 
                        />
                        <Route path="*" element={<ErrorPage message="Страница не найдена" status='404'/>} />
                    </Routes>
                <MenuModal 
                        isModalMenuOpen={isModalMenuOpen} 
                        onMenuModalClose={closeMenuModal} 
                />
                <InfoToolTip 
                        isInfoTooltipOpen={isInfoTooltipOpen}
                        onToolTipClose={toolTipClose}
                        infoTooltipMsg={infoTooltipMsg}
                />
                </div>
            </BrowserRouter>
        </CurrentUserContext.Provider>
    )
}
export default App;