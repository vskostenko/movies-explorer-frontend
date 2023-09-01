import React, {useEffect, useState} from "react";
import favIcon from "../../images/fav_icon_on.png";
import favIconOff from "../../images/fav_icon_off.svg";
import removeIcon from "../../images/del_icon.svg";
import "./MoviesCard.css";
import { MOVIES_SERVER_URL} from "../../utils/constants";
import { useLocation, Link } from "react-router-dom";

function MoviesCard ({movie,onSaveMovie,onRemoveMovie,savedMovies}) {
    const [saveStatus, setSaveStatus] = useState(()=>{
        return savedMovies.some((item) => item.movieId === movie.id)
    });
    useEffect(()=> {

    })


    let { pathname } = useLocation();

    function saveMovieHandle () {
        saveStatus 
            ? onRemoveMovie(movie)
            : onSaveMovie(movie);
        setSaveStatus(!saveStatus);
    }
    function removeMovieHandle () {
        onRemoveMovie(movie);
        setSaveStatus(false);
    }
    return (
        <li className="moviescard">
            <div className="moviescard__header">
                <div className="moviescard__text">
                    <h3 className="moviescard__name">{movie.nameRU}</h3>
                    <p className="moviescard__duration"> {Math.trunc(movie.duration/60)} ч {movie.duration % 60} м</p>
               </div>
               { pathname ==='/saved-movies' 
                    ?    <button className="moviescard__button" onClick={removeMovieHandle}>
                            <img className="moviescard__icon" src={ removeIcon
                            } alt="remove"/>
                        </button>
                    :    <button className="moviescard__button" onClick={saveMovieHandle}>
                            <img className="moviescard__icon" src={ saveStatus ? favIcon : favIconOff
                            } alt="favorite"/>
                        </button>                        
                }
            </div>
            <a className="moviescard__trailerlink link" href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img className="moviescard__image" src={!movie.image.url ? movie.image : MOVIES_SERVER_URL + movie.image.url} alt={movie.nameRU} />
            </a>
        </li>
    )
}

export default MoviesCard;