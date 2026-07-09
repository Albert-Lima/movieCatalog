import { useState } from "react"

import HeaderPage from "./components/Header-main"
import TopSlide from "./components/Top-slide"

import "./App.css"

import movies from "./assets/data/movies"

function App(){
  const [listTop, setListTop] = useState(movies.filter( movie => movie.highlights))

  return(
    <div className="containerMain">
      <HeaderPage />
      <TopSlide 
        listTop = {listTop}
        setListTop = {setListTop}
      />
    </div>
  )
}

export default App