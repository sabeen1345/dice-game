// import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import dices from "../images/dices.png";
import { Button } from "./Button";

function DiceGame({ toggleGame }) {
 
  return (
    <Container>
      <div className="img">
        <img src={dices} alt="dice game" />
      </div>
      <div className="text-box">
        <h1>DICE GAME</h1>
       
        <Button onClick={toggleGame}>Play Now</Button>
      </div>
    </Container>
  );
}

export default DiceGame;

const Container = styled.div`
  /* border: 1px solid; */
  max-width: 1180px;
  height: 522px;
  gap: 5px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  margin-top: 180px;
  margin-bottom: 154px;

  .text-box {
    h1 {
      color: #000;
      font-size: 96px;
      font-style: normal;
      /* font-weight: 700; */
      line-height: normal;
      white-space: nowrap;
    }
  }
`;

// import React, { useState } from 'react';

// const DiceGame = () => {
//   const [diceValue, setDiceValue] = useState(1);

//   const rollDice = () => {
//     const newValue = Math.floor(Math.random() * 6) + 1;
//     setDiceValue(newValue);
//   };

//   return (
//     <div>
//       <h1>Dice Game</h1>
//       <p>Current Dice Value: {diceValue}</p>
//       <button onClick={rollDice}>Roll Dice</button>
//     </div>
//   );
// };

// export default DiceGame;
