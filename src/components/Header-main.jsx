import { useState, useEffect } from "react"
import "./Header-main.css"

function HeaderPage(){
    const [btnSelected, setSelected] = useState("btn-header-start")
    const [slide, setSlide] = useState({})

    function updateSlide(){
        const btnRef = document.querySelector(`#${btnSelected}`)

        const slideWidth = btnRef.offsetWidth
        const slideLeft = btnRef.offsetLeft

        setSlide({width: `${slideWidth}px`, left: `${slideLeft}px`})
    }

    //estaciona o elemento slide quando a página carregar
    useEffect(()=>{
        const btn = document.querySelector("#btn-header-start")

        setSlide({width: `${btn.offsetWidth}px`, left: `${btn.offsetLeft}px`})
    }, [])

    //responsividade do elemento slide
    useEffect(()=>{
        window.addEventListener("resize", updateSlide)

        return(()=>{
            window.removeEventListener("resize", updateSlide)
        })
    }, [btnSelected])


    function handleClick(e){
        const button = e.currentTarget

        const leftSlide = button.offsetLeft
        const widthSlide = button.offsetWidth

        setSlide({width: `${widthSlide}px`, left: `${leftSlide}px`})
        setSelected(button.id)
    
    }

    return(
        <header className="headerMain">
            <ul>
                <li>
                    <button 
                        type="button"

                        id="btn-header-start"

                        onClick={handleClick}
                        >
                        Início
                    </button>
                </li>
                <li>
                    <button 
                        type="button"

                        id="btn-header-lancamentos"

                        onClick={handleClick}
                        >
                        Lançamentos
                    </button>
                </li>
                <li>
                    <button 
                        type="button"

                        id="btn-header-series"

                        onClick={handleClick}
                        >
                        Series
                    </button>
                </li>
            </ul>

            <span 
                className="slideHeader"
                style={{
                    width: slide.width,
                    left: slide.left
                }}
            ></span>
        </header>
    )
}

export default HeaderPage