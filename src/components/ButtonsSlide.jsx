import { useState, useEffect } from "react"

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
                voltar
            </button>


            <button
                onClick={()=>{
                    advanceTopSlide()
                }}
            >
                avançar
            </button>
        </div>
    )
}

export default ButtonsSlide