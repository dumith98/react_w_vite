function GreetingsComponent({nome}){
    return(
        <>
            <h1>E aí {nome ?? "Indefinido"}?</h1>
        </>
    );
}

export default GreetingsComponent;