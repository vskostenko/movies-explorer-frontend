import React from "react";
import favIcon from "../../images/fav_icon_on.png";
import "./MoviesCard.css";
import image from "../../images/sample-image.png";

function MoviesCard () {
    return (
        <li className="moviescard">
            <div className="moviescard__header">
                <div className="moviescard__text">
                    <h3 className="moviescard__name">33 слова о дизайне</h3>
                    <p className="moviescard__duration">1ч 47м</p>
               </div>
               <img className="moviescard__icon" src={ favIcon } alt="favorite"/>
            </div>
            <img src={ image } alt="moviecard" />
        </li>
    )
}

export default MoviesCard;