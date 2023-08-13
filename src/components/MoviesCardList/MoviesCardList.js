import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList (props) {
    return (
        <section className="moviescardlist">
            <ul className="moviescardlist__grid">
                {props.allMovies.map((movie) => {
			        return <MoviesCard movie={movie} />
		        })}
            </ul>
            <button className="moviescardlist__button">
                Ещё
            </button>
        </section>
    )
}
export default MoviesCardList;