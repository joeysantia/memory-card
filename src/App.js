import React, {useState} from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Counter from './components/Counter'
import HighScore from './components/HighScore'
import './App.css';

function App() {
  const [cardArray, setCardArray] = useState([
    {id: 'Mordecai',
     img: '../src/img/mordecai.webp',
     index: 0,
     hasBeenClicked: false 
    },
    {id: 'Rigby',
     img: '#',
     index: 1,
     hasBeenClicked: false 
    },
    {id: 'Muscle Man',
     img: '#',
     index: 2,
     hasBeenClicked: false 
    },
    {id: 'Benson',
     img: '#',
     index: 3,
     hasBeenClicked: false 
    },
    {id: 'Skips',
     img: '#',
     index: 4,
     hasBeenClicked: false 
    },
    {id: 'Pops',
     img: '#',
     index: 5,
     hasBeenClicked: false 
    },
    {id: 'High Five Ghost',
     img: '#',
     index: 6,
     hasBeenClicked: false 
    },
    {id: 'Thomas',
     img: '#',
     index: 7,
     hasBeenClicked: false 
    },
    {id: 'Eileen',
     img: '#',
     index: 8,
     hasBeenClicked: false 
    },
    {id: 'Margaret',
     img: '#',
     index: 9,
     hasBeenClicked: false 
    },
    {id: 'Guardian of Eternal Youth',
     img: '#',
     index: 10,
     hasBeenClicked: false 
    },
    {id: 'Gary',
     img: '#',
     index: 11,
     hasBeenClicked: false 
    },
    {id: 'Don',
     img: '#',
     index: 12,
     hasBeenClicked: false 
    },
    {id: 'Mr. Maellard',
     img: '#',
     index: 13,
     hasBeenClicked: false 
    },
    {id: 'Starla',
     img: '#',
     index: 14,
     hasBeenClicked: false 
    },
    {id: 'Death',
     img: '#',
     index: 15,
     hasBeenClicked: false 
    },
    {id: 'Muscle Bro',
     img: '#',
     index: 16,
     hasBeenClicked: false 
    },
    {id: 'Low Five Ghost',
     img: '#',
     index: 17,
     hasBeenClicked: false 
    },
    {id: 'Garrett Bobby Ferguson',
     img: '#',
     index: 18,
     hasBeenClicked: false 
    },
    {id: 'CJ',
     img: '#',
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

