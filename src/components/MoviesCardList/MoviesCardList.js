import React from "react";
import Movies from "../Movies/Movies";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList () {
    return (
        <section className="moviescardlist">
            <ul className="moviescardlist__grid">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button className="moviescardlist__button">
                Ещё
            </button>
        </section>
    )
}
export default MoviesCardList;