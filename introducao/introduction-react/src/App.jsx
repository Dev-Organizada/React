import CarDetails from './components/CarDetails'
import Container from './components/Container'

function App() {
  const cars = [
    {id: 1, brand:"Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand:"KIA", color: "Branco", newCar: false, km: 12456},
    {id: 3, brand:"Renalt", color: "Azul", newCar: false, km: 7845}
  ]
  return (
      <>
        <p>------- Loop em array de objeto -------</p>
        {cars.map((car) => (
          <CarDetails 
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
      </>
  )
}

export default App

