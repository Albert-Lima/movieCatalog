import "./Trailer.css"

function Trailer({trailerStatus, linkTrailerTop}){
    return(
        <section className={trailerStatus ? "activeTrailer" : "inactiveTrailer"}>
            <iframe 
                width="560" 
                height="315" 
                src={linkTrailerTop} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer;
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </section>
    )
}

export default Trailer