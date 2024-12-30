import style from './Frase.module.css';

function Frase() {

    return (
        <div className={style.fraseConteiner}>
            <p className={style.fraseContent}>Esse é meu componete "Frase"</p>
        </div>
    )
}

export default Frase;