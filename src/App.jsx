import { useState } from "react"

import HeaderPage from "./components/Header-main"
import TopSlide from "./components/Top-slide"
import SlideStandart from "./components/Slide-standart"
import Trailer from "./components/Trailer"

import "./App.css"

import movies from "./assets/data/movies"
import series from "./assets/data/series"

function App(){
  const [listTop, setListTop] = useState(movies.filter( movie => movie.highlights))

  //define o trailer inicialmente como fechado
  const [trailerStatus, setTrailerStatus] = useState(false)

  //pega o trailer do filme em destaque selecionado
  const [linkTrailerTop, setLinkTrailerTop] = useState(listTop[1].trailerLink)

  const newReleases = []

  return(
    <div className="containerMain">
      <Trailer 
        trailerStatus={trailerStatus}
        linkTrailerTop={linkTrailerTop}
      />
      <HeaderPage />
      <TopSlide 
        listTop = {listTop}
        setListTop = {setListTop}
        trailerStatus = {trailerStatus}
        setTrailerStatus = {setTrailerStatus}
        setLinkTrailerTop = {setLinkTrailerTop}
      />

      <SlideStandart 

      />
      
    </div>
  )
}

export default App