import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import 'react-toastify'

/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

 export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies]=React.useState(false)
const notify=()=>toast("You Made It")

  React.useEffect(()=>{
    //console.log("Dice State Changed")
    const allHeld=dice.every(die=>die.isHeld)
    const firstValue=dice[0].value
    const allSameValue=dice.every(die=>die.value===firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
      {notify}
      console.log("You Won!")
      alert("Game Finished. Start A New Game")
      
    }


  },[dice])

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}
  
  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(generateNewDie())
      }
      return newDice
  }
  
  function holdDice(id){
    setDice(oldDice=>oldDice.map(die=>{
      return die.id===id? {
        ...die,isHeld: !die.isHeld
      }:die
    }))
  }

  function rollDice(){
    if(!tenzies) {
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? 
              die :
              generateNewDie()
      }))
  } else {
      setTenzies(false)
      setDice(allNewDice())
  }
  }


  const diceElements = dice.map(die => 
    <Die 
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={()=>holdDice(die.id)}
      />)
  
  return (
      <div className="container">
        <main>
        {tenzies && <Confetti />}
        
        <img src="/vite.svg" alt=""/>
        <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">
              {diceElements}
          </div>
          <div>
            <button onClick={rollDice} className="roll-dice">{tenzies? "New Game":"Roll The Dice"}</button>
          </div>
          
      </main>
          <span className="footer">Kipa @2022</span>
      </div>
  )
}