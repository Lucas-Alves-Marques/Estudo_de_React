function Form(){

    function CadastraUsuario(e){
        e.preventDefault()
        console.log("Cadastro concluido")
    }

     return(
        <div>
            <h1>Me formulario</h1>
            <form onSubmit={CadastraUsuario}>
                <div>
                    <input type="Text" placeholder="Insira um nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
     )
}

export default Form;