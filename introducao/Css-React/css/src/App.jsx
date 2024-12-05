import { useState } from "react"
import MyComponents from "./components/MyComponents"

function App() {
  const num = 9
  const [nome, setNome] = useState("Naty")
  const redTitle = true

  return (
    <>
      {/* CSS Globla */}
      <h1>React com CSS</h1>

      {/* CSS de componente*/}
      <MyComponents />
      <p>Este é um paragrafo do program</p>

      {/* CSS inline*/}
      <p style={{ color: "white", padding: "25px", borderTop: "2px solid gold" }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS inline Dinamico*/}
      <h2 style={num < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS Dinamico</h2>

      <h2
        style={
          nome === "Naty" ? ({ color: "green", backgroundColor: "#000" }) : ({ color: "pink", borderTop: "2px solid gold" })
        }>
        Nome alterado
      </h2>
      <button onClick={() => setNome("Teste")}>Alterar nome</button>

      {/* CSS Classe Dinamica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Titulo da classe Dinamica
      </h2>

    </>
  )
}

export default App
