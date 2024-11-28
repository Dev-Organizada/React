// components
import FirstComponent from './components/FirstComponent'
import Event from './components/Event'
import Challenge from './components/Challenge'
import MenegeData from './components/ManegeData'

// image
import ImageAda from './assets/ada.jpg'

// styles
import './App.css'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'



function App() {
  return (
      <>
        <MenegeData/>
        <ListRender/>
        <ConditionalRender/>

        <p>------- Props Simples -------</p>
        {/* Props */}
        <ShowUserName name="Matheus" />
        <p>------- Fim -------</p>

        <p>------- Props com Destructuring -------</p>
        {/* Destructuring*/}
        <CarDetails brand="VW" km={1000} color="Red" newCar={false}/>

        {/* Reaprovaitamento de código */}
        <CarDetails brand="Ford" km={0} color="White" newCar={true}/>
        <CarDetails brand="Fiat" km={4500} color="Pink" newCar={false}/>
        <p>------- Fim -------</p>
      </>
  )
}

export default App

