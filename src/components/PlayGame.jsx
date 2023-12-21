import React from "react";
import styled from "styled-components";
import dice_1 from "../images/dice_1.png";
import { Button, OutlineButton } from "./Button";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";

function PlayGame() {
  return (
    <Container>
      <div className="top-section">
       <TotalScore />
       <SelectNumber />
      </div>
      <div className="dices">
        <div className="dice_box">
          <img src={dice_1} alt="" />
          <p>Click on Dice to roll</p>
        </div>
        <div className="btns">
          <OutlineButton>Reset score</OutlineButton>
          <Button>Show Result</Button>
        </div>
      </div> 
    </Container>
  );
}

export default PlayGame;

const Container = styled.div`
  max-width: 1440px;
  height: 856px;
  border: 1px solid;
  .top-section {
    margin-top: 64px;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    gap: 593px;
      /* width: 1280px; */
    border: 1px solid green;}

  .dices {
    gap: 36px;
    height: 449px;
    width: 250px;
    border: 1px solid;
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
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 229px;
      }

      img {
        width: 250px;
        height: 250px;
      }
    }
    .btns {
      /* border: 1px solid; */
      width: 220px;
      height: 112px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }
  }
`;
