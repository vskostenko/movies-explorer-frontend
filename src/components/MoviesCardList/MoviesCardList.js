import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState, useEffect } from 'react';
import { useResize } from "../../hooks/useResize";

function MoviesCardList (props) {
    const { width } = useResize();
    const [itemCount, setItemCount] = useState();
    const [moreCount, setMoreCount] = useState();
    const [checkedMovies, setCheckedMovies] = useState ([]);

    useEffect (()=> {
            const movies = props.allMovies.filter ((movie) => {
                if (!props.isShortMovies  && movie.duration < 40 ) return false
                else return true;
            })
            setCheckedMovies(movies);
        }, [props.isShortMovies, props.allMovies])

    function buttonHandler () {
        setItemCount(itemCount+moreCount);
    }
    useEffect (()=> {
        if ( width < 768) {
            setItemCount(5);
            setMoreCount(2);
        } else if (width > 1279) {
            setItemCount(12);
            setMoreCount(3);
        } else {
            setItemCount(8);
            setMoreCount(2);
        }
    },[width])
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