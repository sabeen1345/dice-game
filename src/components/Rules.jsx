import React, { useState } from "react";
import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>

      <div className="rules">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </li>
        <li>If you get wrong guess then 2 point will be dedcuted </li>
      </div>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  border: none;
  background: #fbf1f1;
  width: 794px;
  height: 208px;
  padding: 20px;
  gap: 24px;
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 64px 308px;
  h2 {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .rules {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  li {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    list-style: none;
    line-height: normal;
  }
`;
