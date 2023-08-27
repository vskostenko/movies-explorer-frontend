import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState, useEffect } from 'react';
import { useResize } from "../../utils/useResize";

function MoviesCardList (props) {
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
    const [itemCount, setItemCount] = useState();
    const [moreCount, setMoreCount] = useState();
    const [checkedMovies, setCheckedMovies] = useState ([]);

    useEffect (()=> {
            const movies = props.allMovies.filter ((movie) => {
                if (!props.isShortMovies  && movie.duration < 40 ) return false
                else return true;
            })
            setCheckedMovies(movies);
            console.log(props.allMovies);
        }, [props.isShortMovies, props.allMovies])

    function buttonHandler () {
        setItemCount(itemCount+moreCount);
    }
    useEffect (()=> {
        if (!isScreenSm) {
            setItemCount(5);
            setMoreCount(2);
        } else {
            setItemCount(12);
            setMoreCount(3);
        }
    },[isScreenSm])
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