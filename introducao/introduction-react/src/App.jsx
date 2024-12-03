import { useState } from 'react'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const cars = [
    {id: 1, brand:"Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand:"KIA", color: "Branco", newCar: false, km: 12456},
    {id: 3, brand:"Renalt", color: "Azul", newCar: false, km: 7845}
  ]

  function showMessage() {
    console.log("Mensagem da Função")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id: 1, nome: "Maria Benedita", idade: 28, profissao:"Advogada"},
    {id: 2, nome: "Joao Messias", idade: 23, profissao:"Programador"},
    {id: 3, nome: "Maria Clara", idade: 10, profissao:"Estudante"},
  ]

  return (
      <>
        <p>------- Loop em array de objeto -------</p>
        {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar}/>
        ))}
        <p>------- Fim -------</p>

        <p>------- Prop Children -------</p>
        <Container>
          <p>Este é o conteudo</p>
        </Container>
        <p>------- Fim -------</p>

        <p>------- Função como Prop -------</p>
        <ExecuteFunction myFunction={showMessage}/>
        <p>------- Fim -------</p>

        <p>------- State lift -------</p>
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage} />
        <p>------- Fim -------</p>

        <p>------- Desafio 4 -------</p>
        {users.map((user) => (
          <UserDetails 
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}/>
        ))}
        <p>------- Fim -------</p>

      </>
  )
}

export default App

