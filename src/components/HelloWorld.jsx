import Frase from "./Frase"

function HelloWorld() {
    return(
        <div className="HelloWorld">
            <Frase />
            <h1>Meu primeiro componente</h1>
            <p>Olá Mundo</p>
            <Frase />
        </div>
    ) 
}

export default HelloWorld