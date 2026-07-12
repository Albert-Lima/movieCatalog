import { useState } from "react"

function SlideStandart({newReleases}){
    return(
        <section className="slide-standart">
            {
                newReleases.map((release, index)=>(
                    <section 
                        style={{color: "white"}}
                        className=""
                        key={index}
                    >
                        {release.title}
                    </section>
                ))
            }
        </section>
    )
}

export default SlideStandart