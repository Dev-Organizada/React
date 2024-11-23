// components
import FirstComponent from './components/FirstComponent'
import Event from './components/Event'
import Challenge from './components/Challenge'

// image
import ImageAda from './assets/ada.jpg'

// styles
import './App.css'



function App() {
  return (
      <>
        <h1>Avançando em React</h1>
        <p>Adicionando imagem via public</p>
        <div>
          <img src="code.jpg" alt="simbolo-react" />
        </div>

        <p>Adicionando imagem via assets</p>
        <div>
          <img src={ImageAda} alt="Ada Programadora" />
        </div>
      </>
  )
}

export default App

