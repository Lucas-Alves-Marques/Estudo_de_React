import { useState } from "react";

function Form() {

    function CadastraUsuario(e) {

        e.preventDefault()

        console.log("Cadastro concluido")

        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu formulario</h1>
            <form onSubmit={CadastraUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="Text"
                        id="nome"
                        name="nome"
                        placeholder="Insira um nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        placeholder="Insira sua senha"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;