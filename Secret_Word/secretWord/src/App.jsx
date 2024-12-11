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
  const [gameStage, setGameStage] = useState(stage[0].name) //Change the game status
  const [words] = useState(wordsList)

  const [pickeWord, setPickeWord] = useState("") 
  const [pickedCategory, setPickedCategory] = useState("")
  const [letter, setLetter] = useState([])

  //Picked Category --- Função para escolher de forma aleatoria a categoria e as palavras
  const pickWordAndCategory = () => {
    //Pick a random category
    const categories = Object.keys(words) //pegar as palavras chaves do array de palavras
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] //vai gerar um indice aleatorio de acordo com a qtd de palavras chaves do array
    
    console.log(category)

    //Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)] //gerar uma palavra aleatoria
    console.log(word)

    return {word, category}// o retorno será um objeto
  }

  //Start the secret word game
  const startGame = () => {
    // Pick word and category
    const {word, category} = pickWordAndCategory()

    //Create an array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase()) //transformar todas as letras em minusculas

    console.log(word, category)
    console.log(wordLetters)

    //Fill states
    setPickeWord(word)
    setPickedCategory(category)
    setLetter(wordLetters)

    setGameStage(stage[1].name)
  }

  //Process the letter input
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
