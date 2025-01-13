function Evento({Botao}){

    function Ativar(){

        console.log(`Salve, comando ativado, ${Botao}° botão`)
    }

    return(
        <div>
            <h3>Clique para ativar o Evento</h3>
            <button onClick={Ativar}>Ativar</button>
        </div>

    )
}

export default Evento;