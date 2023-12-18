import React from 'react'

import dices from '../images/dice.png'
import './DiceGame.css'
import Card from './Card';
function DiceGame() {
  return (
   
  <Card>
    <div className='container'>
    <div className='img'>
      <img src={ dices} alt="dice game" />
    </div>
    <div className='heading'>
      <h1>DICE GAME</h1>
      <button>Play Now</button>
    </div>
    </div>
  </Card>

  )
}

export default DiceGame
