import Button from "./Eventos/Button";

function Evento(){

    function Ativar(){

        console.log("Ativando meu evento")
    }

    function Ativar2(){

        console.log("Ativando meu segundo evento")
    }


    return(
        <div>
            <h3>Clique para ativar o Evento</h3>
            <Button event={Ativar} text={"Meu Evento"}/>
            <Button event={Ativar2} text={"Meu segundo Evento"}/>
        </div>

    )
}

export default Evento;