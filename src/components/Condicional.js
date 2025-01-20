import { useState } from "react";

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function EnviarEmail(e){

        e.preventDefault()

        setUserEmail(email)
    
    }

    function limparEmail(){

        setUserEmail('')
    }

    return(
        <div>
            <h1>Cadastro de Email</h1>
            <form>
                <input type='email' placeholder="Digite seu email..." onChange={(e)=>{setEmail(e.target.value)}}></input>
                <button type="Submit" onClick={EnviarEmail}>Enviar</button>
            </form>
            {userEmail && (

                <div>
                    <p>O e-mail digiado foi {userEmail}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </div>

    )
}

export default Condicional;