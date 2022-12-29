import React, {useState} from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Counter from './components/Counter'
import HighScore from './components/HighScore'
import mordecaiImg from './img/mordecai.webp'
import rigbyImg from './img/rigby.webp'
import muscleManImg from './img/muscle-man.webp'
import bensonImg from './img/benson.webp'
import skipsImg from './img/skips.webp'
import popsImg from './img/pops.webp'
import highFiveGhostImg from './img/high-five-ghost.webp'
import eileenImg from './img/eileen.webp'
import margaretImg from './img/margaret.webp'
import CJImg from './img/cj.webp'
import thomasImg from './img/thomas.webp'
import maellardImg from './img/maellard.webp'
import starlaImg from './img/starla.webp'
import garyImg from './img/gary.webp'
import guardianImg from './img/guardian.webp'
import deathImg from './img/death.webp'
import lowFiveGhostImg from './img/low-five-ghost.webp'
import GBFImg from './img/gbf.webp'
import donImg from './img/don.webp'
import muscleBroImg from './img/muscle-bro.webp'
import './App.css';

function App() {
  const [cardArray, setCardArray] = useState([
    {id: 'Mordecai',
     img: mordecaiImg,
     index: 0,
     hasBeenClicked: false 
    },
    {id: 'Rigby',
     img: rigbyImg,
     index: 1,
     hasBeenClicked: false 
    },
    {id: 'Muscle Man',
     img: muscleManImg,
     index: 2,
     hasBeenClicked: false 
    },
    {id: 'Benson',
     img: bensonImg,
     index: 3,
     hasBeenClicked: false 
    },
    {id: 'Skips',
     img: skipsImg,
     index: 4,
     hasBeenClicked: false 
    },
    {id: 'Pops',
     img: popsImg,
     index: 5,
     hasBeenClicked: false 
    },
    {id: 'High Five Ghost',
     img: highFiveGhostImg,
     index: 6,
     hasBeenClicked: false 
    },
    {id: 'Thomas',
     img: thomasImg,
     index: 7,
     hasBeenClicked: false 
    },
    {id: 'Eileen',
     img: eileenImg,
     index: 8,
     hasBeenClicked: false 
    },
    {id: 'Margaret',
     img: margaretImg,
     index: 9,
     hasBeenClicked: false 
    },
    {id: 'Guardian of Eternal Youth',
     img: guardianImg,
     index: 10,
     hasBeenClicked: false 
    },
    {id: 'Gary',
     img: garyImg,
     index: 11,
     hasBeenClicked: false 
    },
    {id: 'Don',
     img: donImg,
     index: 12,
     hasBeenClicked: false 
    },
    {id: 'Mr. Maellard',
     img: maellardImg,
     index: 13,
     hasBeenClicked: false 
    },
    {id: 'Starla',
     img: starlaImg,
     index: 14,
     hasBeenClicked: false 
    },
    {id: 'Death',
     img: deathImg,
     index: 15,
     hasBeenClicked: false 
    },
    {id: 'Muscle Bro',
     img: muscleBroImg,
     index: 16,
     hasBeenClicked: false 
    },
    {id: 'Low Five Ghost',
     img: lowFiveGhostImg,
     index: 17,
     hasBeenClicked: false 
    },
    {id: 'Garrett Bobby Ferguson',
     img: GBFImg,
     index: 18,
     hasBeenClicked: false 
    },
    {id: 'CJ',
     img: CJImg,
     index: 19,
     hasBeenClicked: false 
    }

  ])
  const [count, setCount] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function incrementScore() {
    let newCount = count + 1
    setCount(newCount)
    if (count >= highScore) {
      setHighScore(newCount)
    }
  }

  function resetCounter() {
    setCount(0)
  }

  function setCardStatus(cardArray, setCardArray, resetCounter, incrementScore, index) {
    
    //right now passing in these functions as arguments
    //but i should see what happens if i remove them
    let card = cardArray[index]
    if (card.hasBeenClicked) {
      for (const card of cardArray) {
        card.hasBeenClicked = false 
      }
      setCardArray(cardArray)
      resetCounter()
      
    } else {
      cardArray[index].hasBeenClicked = true 
      setCardArray(cardArray)
      incrementScore()
    }
  }

  function randomize(arr) {
    let res = []
    let indexArray = []
    for (let i = 0; i < arr.length; i++) {
      indexArray[i] = i 
    }


    for (const num of arr) {
      let randomNum = Math.floor(Math.random() * indexArray.length)
      res[indexArray[randomNum]] = num
      indexArray.splice(randomNum, 1)
    }

    return res 

  }

  let randomCards = randomize(cardArray)

  return <div id="app">
    <Header />
    <main>
      <div id='counter-box'>
        <Counter count={count}/>
        <HighScore highScore={highScore}/>
      </div>
      <div id='card-box'>
        {randomCards.map((card, i) => {
          return <Card
                  id={card.id}
                  incrementScore={incrementScore}
                  resetCounter={resetCounter}
                  hasBeenClicked={card.hasBeenClicked}
                  cardArray={cardArray}
                  index={card.index}
                  key={i}
                  img={card.img}
                  setCardStatus={setCardStatus}
                  setCardArray={setCardArray}
                 />
        })}
      </div>
    </main>
  </div>
}

export default App;

