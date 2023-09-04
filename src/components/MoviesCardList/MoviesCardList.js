import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState, useEffect } from 'react';
import { useResize } from "../../hooks/useResize";
import { SHORT_MOVIE_LENGTH, SCREEN_MD, SCREEN_XL } from "../../utils/constants"

function MoviesCardList (props) {
    const { width } = useResize();
    const [itemCount, setItemCount] = useState();
    const [moreCount, setMoreCount] = useState();
    const [checkedMovies, setCheckedMovies] = useState ([]);

    useEffect (()=> {
        const moviesSS = getFilteredMovies;
        setCheckedMovies(moviesSS);

        }, [props.isShortMovies, props.allMovies])
    
    function buttonHandler () {
        setItemCount(itemCount+moreCount);
    }
    useEffect (()=> {
        if ( width < SCREEN_MD) {
            setItemCount(5);
            setMoreCount(2);
        } else if (width > SCREEN_XL) {
            setItemCount(12);
            setMoreCount(3);
        } else {
            setItemCount(8);
            setMoreCount(2);
        }
    },[width])
    function getFilteredMovies () { 
        return ((props.allMovies.filter ((movie) => 
            (props.isShortMovies ? movie.duration <=SHORT_MOVIE_LENGTH : movie)
            )
        ))
    }

    return (
        <section className="moviescardlist">
            <ul className="moviescardlist__grid">
                {
                checkedMovies.slice(0, itemCount).map((movie) => {
			        return <MoviesCard 
                                movie={movie}
                                onSaveMovie={props.onSaveMovie}
                                onRemoveMovie={props.onRemoveMovie}
                                savedMovies={props.savedMovies}
                                key={movie.id || movie._id} 
                            />
		        })}
            </ul>
            { props.allMovies.length > itemCount && 
                <button className="moviescardlist__button" onClick={buttonHandler}>
                    Ещё
                </button>
            }
        </section>
    )
}
export default MoviesCardList;