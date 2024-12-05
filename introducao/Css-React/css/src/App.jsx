import { useState } from "react"
import MyComponents from "./components/MyComponents"
import Title from "./components/Title"
import CarDetails from "./components/CarDetails"

function App() {
  const cars = [
    {brand:"Fiat", color: "Azul", km: 0},
    {brand:"Uno", color: "Branco", km: 12547},
    {brand:"Civic", color: "Preto", km: 0}
  ]

  return (
    <>
      <h1>Desafio 5</h1>
      {cars.map((car) => 
        <CarDetails brand={car.brand} color={car.color} km={car.km}/>
      )}
      
    </>
  )
}

export default App
