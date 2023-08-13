import React from "react";
import favIcon from "../../images/fav_icon_on.png";
import "./MoviesCard.css";

function MoviesCard (props) {
    return (
        <li className="moviescard">
            <div className="moviescard__header">
                <div className="moviescard__text">
                    <h3 className="moviescard__name">{props.movie.nameRU}</h3>
                    <p className="moviescard__duration"> {Math.trunc(props.movie.duration/60)} ч {props.movie.duration % 60} м</p>
               </div>
               <img className="moviescard__icon" src={ favIcon } alt="favorite"/>
            </div>
            <img src={'https://api.nomoreparties.co' + props.movie.image.url} alt="moviecard" />
        </li>
    )
}

export default MoviesCard;