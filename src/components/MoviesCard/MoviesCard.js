import React from "react";
import favIcon from "../../images/fav_icon_on.png";
import "./MoviesCard.css";
import mainApi from "../../utils/MainApi";
import {API_SERVER_URL} from "../../utils/constants";

function MoviesCard ({movie}) {

function saveMovieHandle () {
    mainApi.createMovie(
        {   
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: API_SERVER_URL + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail: API_SERVER_URL + movie.image.formats.thumbnail.url || "",
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        }
    );
}
    return (
        <li className="moviescard">
            <div className="moviescard__header">
                <div className="moviescard__text">
                    <h3 className="moviescard__name">{movie.nameRU}</h3>
                    <p className="moviescard__duration"> {Math.trunc(movie.duration/60)} ч {movie.duration % 60} м</p>
               </div>
               <button className="moviescard__button" onClick={saveMovieHandle}>
                    <img className="moviescard__icon" src={ favIcon } alt="favorite"/>
               </button>

            </div>
            <img src={API_SERVER_URL + movie.image.url} alt={movie.nameRU} />
        </li>
    )
}

export default MoviesCard;