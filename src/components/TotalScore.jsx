import React from "react";
import styled from "styled-components";

function TotalScore({ score }) {
  return (
    <ScoreSection>
      <div className="score-section">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </ScoreSection>
  );
}

export default TotalScore;

const ScoreSection = styled.div`
  .score-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 115px;
    h1 {
      font-size: 84px;
      line-height: 64px;
    }
    & p {
      color: #000;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
