import Item from "./Item";

function List(){

    return(
        <>
        <h3>Minhas Lista</h3>
        <ul>
            <Item marca="Lacta" ano_lancamento={1983}/>
            <Item marca="Nestle" ano_lancamento={1866}/>
            <Item marca="Garoto" ano_lancamento={1929}/>
            <Item marca="Cacau Show" ano_lancamento={1988}/>
            <Item />
        </ul>
        </>
    )

}

export default List;
