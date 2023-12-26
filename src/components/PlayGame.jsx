import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import dice_1 from "../images/dice_1.png";
import dice_2 from "../images/dice_2.png";
import dice_3 from "../images/dice_3.png";
import dice_4 from "../images/dice_4.png";
import dice_5 from "../images/dice_5.png";
import dice_6 from "../images/dice_6.png";
const diceFaces = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

function PlayGame() {
  const [error, setError] = useState();
  const [score, setScore] = useState(0);
  const [selectNum, setSelectNum] = useState();
  const [currentDice, setCurrentDice] = useState(diceFaces[0]);
  const [showRules, setShowRules] = useState(false);
  const rollDice = () => {
    if (!selectNum) {
      setError("You have not selected any number");
      return;
    }

    const randomIndex = Math.floor(Math.random() * diceFaces.length);
    const rolledDice = diceFaces[randomIndex];

    setCurrentDice(rolledDice);
    if (selectNum === randomIndex + 1) {
      setScore((score) => score + randomIndex);
      console.log("Match!");
    } else {
      setScore((score) => score - 1);
      console.log("No match");
    }
    setSelectNum(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  const toggleRules = () => {
    setShowRules(!showRules);
  };
  return (
    <Container>
      <div className="top-section">
        <TotalScore score={score} />
        <SelectNumber
          selectNum={selectNum}
          setSelectNum={setSelectNum}
          setError={setError}
          error={error}

        />
      </div>
      <RoleDice
        currentDice={currentDice}
        rollDice={rollDice}
        resetScore={resetScore}
        toggleRules={toggleRules}
      />
      {showRules && <Rules />}
    </Container>
  );
}

export default PlayGame;

const Container = styled.div`
  max-width: 1440px;
  height: 856px;
  margin: 0 auto;
  .top-section {
    display: flex;
    justify-content: space-between;
    margin: 64px 80px 48px 80px;
    align-items: center;
  }
`;
