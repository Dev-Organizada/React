//CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react'

//Data
import {wordsList} from './data/words'

// Components
import StarScreen from './components/StarScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

//Variavel para controlar os estados do jogo
const stage = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stage[0].name)
  const [words] = useState(wordsList)

  //Iniciar o jogo
  const startGame = () => {
    setGameStage(stage[1].name)
  }

  //Controlar as letras 
  const verifyLetter = () => {
    setGameStage(stage[2].name)
  }

  //Finalizar o jogo
  const retry = () => {
    setGameStage(stage[0].name)
  }

  return (
    <>
      {gameStage === 'start' && <StarScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </>
  )
}

export default App
