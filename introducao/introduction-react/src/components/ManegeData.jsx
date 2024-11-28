import { useState } from "react"

export const ManegeData = () => {

    const [number, setNumber] = useState(5)

  return (
    <div>
      <p>------- Gerenciar dados -------</p>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(10)}>Mudar Valor</button>
      <p>------- fim -------</p>
    </div>
  )
}

export default ManegeData