import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca = "Adidas" lancamento={2025}/>
                <Item marca = "Nike" lancamento={2024}/>
                <Item marca = "Lacoste" lancamento={2023}/>
                <Item />
            </ul>
        </>
    )
}

export default List