import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [cardArray, setCardArray] = useState([])
  const [count, setCount] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function incrementScore() {
    setCount(count + 1)
    if (count > highScore) {
      setHighScore(count)
    }
  }

  function resetCounter() {
    setCount(0)
  }

  function setCardStatus(index) {
    let card = cardArray[index]
    if (card.hasBeenClicked) {
      
      resetCounter()
    }
  }
}

export default App;

