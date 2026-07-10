import { useState, useEffect } from "react"

import "./ButtonsSlide.css"

function ButtonsSlide({listTop, atualIndexSlideTop, setAtualIndexSlideTop}){

    function advanceTopSlide() {
        const total = listTop.length;

        setAtualIndexSlideTop((atual) => (atual + 1) % total);
    }

    function backTopSlide() {
        const total = listTop.length;

        setAtualIndexSlideTop((atual) => (atual - 1 + total) % total);
    }

    return(
        <div className="slideControl">
            <button
                onClick={()=>{
                    backTopSlide()
                }}
            >
                <img src="/images/icons8-back-50.png" alt="voltar" />
            </button>


            <button
                onClick={()=>{
                    advanceTopSlide()
                }}
            >
                <img src="/images/icons8-avançar-50.png" alt="avançar" />
            </button>
        </div>
    )
}

export default ButtonsSlide