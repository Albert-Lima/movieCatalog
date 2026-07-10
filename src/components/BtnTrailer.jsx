import "./BtnTrailer.css"

function BtnTrailer({linkTrailer, setLinkTrailerTop, trailerStatus, setTrailerStatus}){
    return(
        <button
            className="btnTrailer"
            onClick={
                ()=>{
                    setLinkTrailerTop(linkTrailer)
                    setTrailerStatus(true)
                }
            }
        >
            <img src="/images/icons8-reproduzir-60.png" alt="assistir trailer" />
            Assistir
        </button>
    )
}

export default BtnTrailer