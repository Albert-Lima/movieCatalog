function ButtonsSlide({listTop, setListTop}){

    function passToRight(){
        //crio uma cópia para não alterar diretamente o elemento listPop
        const lista = [...listTop]

        //pego o último elemento dessa cópia cópia
        const lastItem = lista.pop()

        //adicionar o último elemento no início do array
        lista.unshift(lastItem)

        //atualiza a lista
        setListTop(lista)
    }

    return(
        <div className="slideControl">
            <button>voltar</button>
            <button
                onClick={()=>{
                    passToRight()
                }}
            >
                avançar
            </button>
        </div>
    )
}

export default ButtonsSlide