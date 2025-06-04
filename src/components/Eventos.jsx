function Eventos ({numero}){

    function meuEvento(){
        console.log(`Fui ativado ${numero}` )
    }

    return(<>
    <p>Clique para ativar um evento</p>
    <button onClick={meuEvento}>Ativar</button>   
    </>)
}

export default Eventos