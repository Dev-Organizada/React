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



function App() {
  return (
      <>
        <MenegeData/>
        <ListRender/>
        <ConditionalRender/>
        <ShowUserName name="Matheus" />
      </>
  )
}

export default App

