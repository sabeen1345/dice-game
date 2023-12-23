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
      <DiceContainer>
        <div className="dice_box">
          <img src={dice_1} alt="" />
          <p>Click on Dice to roll</p>
        </div>
        <div className="btns">
          <OutlineButton>Reset score</OutlineButton>
          <Button>Show Result</Button>
        </div>
      </DiceContainer>
    </Container>
  );
}

export default PlayGame;

const Container = styled.div`
  max-width: 1440px;
  height: 856px;
  margin: 0 auto;
  /* border: 1px solid; */
  .top-section {
    display: flex;
    justify-content: space-between;
    margin: 64px 80px 48px 80px;
    align-items: center;
    /* border: 5px solid green; */
  }
`;

const DiceContainer = styled.div`
  gap: 36px;
  height: 440px;
  width: 225px;
  /* border: 1px solid; */
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
    /* border: 1px solid; */
    width: 220px;
    height: 112px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;
