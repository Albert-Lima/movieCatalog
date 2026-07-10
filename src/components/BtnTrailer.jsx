function BtnTrailer({linkTrailer, setLinkTrailerTop, trailerStatus, setTrailerStatus}){
    return(
        <button
            onClick={
                ()=>{
                    setLinkTrailerTop(linkTrailer)
                    setTrailerStatus(true)
                }
            }
        >
            ver
        </button>
    )
}

export default BtnTrailer