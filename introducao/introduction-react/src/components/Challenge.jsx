const Challenge = () => {
    const n1 = 5
    const n2 = 6

    return (
        <div>
            <p> Primeiro numero = {n1}</p>
            <p> Segundo numero = {n2}</p>
            <button onClick={() => console.log(n1 + n2)}>Somar</button>
        </div>
    )

}
export default Challenge