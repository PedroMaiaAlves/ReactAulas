function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Usuário cadastrado")
    }

    return(
        <div>
            <h1>Meu formulario</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type ="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form