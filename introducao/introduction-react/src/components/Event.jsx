const Event = () => {

    const handleMyEvent = () => {
        console.log("Clicou no botão")
    }

    const renderSomething = (x) => {
        if(x){
            return <h4>Renderizou verdadeiro</h4>
        }else {
            return <h4>Renderizou falso</h4>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                {/*Forma mais facil de criar uma função simples */}
                <button onClick={() => console.log("Clicou!!")}>Clique Aquiii</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Event