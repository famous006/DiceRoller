import React, { useState } from 'react'
// import '../src/assets/dice1.png';

const App = () => {
  const [dice, setdice] = useState(1)
  const [dice2, setdice2] = useState(1)
  
  const diceRoll = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setdice(randomNumber)
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    setdice2(randomNumber2)
  }


  return (
    <>
    <div className='mx-auto text-center'>
      <h1>Ludo Dice Roller</h1>
      <div className=' d-flex justify-content-center gap-5'>
        <div>
          <p>First Dice: <span id='dice'>{dice}</span></p>
          <img src={`src/assets/dice${dice}.png`} alt="" width={'50px'}/>
        </div>
        <div>
        <p>Second Dice: <span id='secondDice'> {dice2}</span></p>
        <img src={`src/assets/dice${dice2}.png`} alt="" width={'50px'}/>
        </div>
      </div>
      <button className='btn btn-dark' onClick={diceRoll}>Roll Dice</button>
    </div>
    </>
  )
}


export default App