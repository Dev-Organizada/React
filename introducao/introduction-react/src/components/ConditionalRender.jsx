import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)
    const [name, setName] = useState("Mateus")

  return (
    <div>
      <h2>Isso será exibido? Renderização condicional</h2>
      {x && <p>Se x for true, sim!</p>}

      <h2>Rederização com If e else</h2>
      {name === "Joao" ? ( //if
        <div>
          <p>O Nome é Joao</p>
        </div>
      ) : ( //else
        <div>
          <p>Não nao encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Joao")}>Clique para alterar o nome</button>
    </div>
  )
}

export default ConditionalRender