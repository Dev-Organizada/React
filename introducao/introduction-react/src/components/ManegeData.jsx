import { useState } from "react"

export const ManegeData = () => {

    const [number, setNumber] = useState(5)

  return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(10)}>Mudar Valor</button>
    </div>
  )
}

export default ManegeData