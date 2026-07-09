import { useState, useEffect } from "react"

import ButtonsSlide from "./ButtonsSlide"
import Stars from "./Stars"

import "./Top-slide.css"

import movies from "../assets/data/movies"

function TopSlide({listTop, setListTop}){

    function loadClassName(index){
        if(index === 2){
            const className = "leftMovieTopSlide movie-top-page"
            return className
        }
        if(index === 0){
            const className = "centralMovieTopSlide movie-top-page"
            return className
        }
        if(index === 1){
            const className = "rightMovieTopSlide movie-top-page"
            return className
        }
    }

    return(
        <section className="top-slide">
            <section className="content-Slides-Top">
                {
                    listTop.map((movie, index)=>(
                        <div 
                            key={movie.id}

                            style={
                                { backgroundImage: `url(${movie.background})`}
                            }

                            className={ listTop.length <= 3 ? loadClassName(index) : "movie-top-page" }
                            >
                            <span className="effectBackground-opacity"></span>
                            
                            <div className="descMovieTopSlide">
                                <h1 className="titleMovieTopSlide">{movie.title}</h1>
                                <span className="detailsMovieTopSlide">
                                    <div className="imdbTopSilde">
                                        <Stars 
                                            imdb={movie.imdb}
                                        />
                                        <p>
                                            {`${movie.imdb} IMDb`}
                                        </p>
                                    </div>
                                    <div className="movie-year-topSlide">
                                        {movie.year}
                                    </div>
                                </span>
                                <p className="sinopseTopSlide">
                                    {movie.sinopse}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </section>

            <ButtonsSlide
                listTop = {listTop}
                setListTop = {setListTop}
            />
        </section>
    )
}

export default TopSlide