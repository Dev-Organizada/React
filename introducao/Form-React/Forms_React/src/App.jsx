import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{name:"Fernanda", email:"fernanda@teste.com"}}/>
    </>
  )
}

export default App
