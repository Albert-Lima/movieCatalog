import "./Navigation-dots.css"

function NavigationDots({listTop, atualIndexSlideTop}){
    return(
        <div className="navigation-dots">
            {
                listTop.map((item, index)=>(
                    <section key={index} className={ index === atualIndexSlideTop ? "selectedDotTop  dotTop" : "dotTop"}>
                        
                    </section>
                ))
            }
        </div>
    )
}

export default NavigationDots