import { useState } from "react"

import "./Slide-standart.css"

function SlideStandart({listStandart}){
    return(
        <section className="slide-standart">
            {
                listStandart.map((item, index)=>(
                    <section 
                        style={{color: "white"}}
                        className=""
                        key={index}
                    >
                        {item.title}
                    </section>
                ))
            }
        </section>
    )
}

export default SlideStandart