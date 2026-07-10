import { useState, useEffect } from "react"

import ButtonsSlide from "./ButtonsSlide"
import Stars from "./Stars"
import NavigationDots from "./Navigation-dots"
import BtnTrailer from "./BtnTrailer"

import "./Top-slide.css"

import movies from "../assets/data/movies"

function TopSlide({listTop, setListTop, trailerStatus, setTrailerStatus, setLinkTrailerTop}){

    const [atualIndexSlideTop, setAtualIndexSlideTop] = useState(1)

    function loadClassName(index, indexAtual){
        const total = listTop.length

        const left = (atualIndexSlideTop - 1 + total) % total

        const rigth = (atualIndexSlideTop + 1) % total
        
        if(index === left){
            return "leftMovieTopSlide movie-top-page"
        }

        if(index === rigth){
            return "rightMovieTopSlide movie-top-page"
        }

        if(index === atualIndexSlideTop){
            return "centralMovieTopSlide movie-top-page"
        }

        const className = "hiddenMovieTopSlide movie-top-page" 

        return className
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

                            className={ loadClassName(index)}
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
                                <span className="genreMovieTop">
                                    {movie.genre.map((genre)=>(
                                        <p>{genre}</p>
                                    ))}
                                </span>
                                <p className="sinopseTopSlide">
                                    {movie.sinopse}
                                </p>
                                <BtnTrailer 
                                    linkTrailer={movie.trailerLink}
                                    setLinkTrailerTop={setLinkTrailerTop}
                                    trailerStatus = {trailerStatus}
                                    setTrailerStatus = {setTrailerStatus}
                                />
                            </div>
                        </div>
                    ))
                }
            </section>

            <ButtonsSlide
                listTop={listTop}
                setListTop={setListTop}
                atualIndexSlideTop={atualIndexSlideTop}
                setAtualIndexSlideTop={setAtualIndexSlideTop}
            />

            <NavigationDots 
                listTop={listTop}
                atualIndexSlideTop={atualIndexSlideTop}
            />
        </section>
    )
}

export default TopSlide