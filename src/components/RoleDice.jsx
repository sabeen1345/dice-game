import React from "react";
import styled from "styled-components";


import { Button, OutlineButton } from "./Button";
function RoleDice({currentDice, rollDice,resetScore, toggleRules}) {

  return (
    <div>
      <DiceContainer>
        <div className="dice_box" onClick={rollDice}>
          <img src={currentDice} alt="" />
        
          <p>Click on Dice to roll</p>
        </div>
        <div className="btns">
          <OutlineButton onClick={resetScore} >Reset score</OutlineButton>
          <Button onClick={toggleRules}>Show Rules</Button>
        </div>
      </DiceContainer>
    </div>
  );
}

export default RoleDice;
const DiceContainer = styled.div`
  gap: 36px;
  height: 440px;
  width: 225px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  .dice_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    p {
      color: #000;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      width: 229px;
      padding-left: 28px;
    }

    img {
      width: 225px;
      height: 225px;
    }
  }
  .btns {
    width: 220px;
    height: 112px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;
