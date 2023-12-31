import React, { useState } from "react";
import styled from "styled-components";

function SelectNumber({ setError, selectNum, setSelectNum, error }) {
  const ary = [1, 2, 3, 4, 5, 6];

  const handleSelectNumber = (value) => {
    setSelectNum(value);
    setError("");
    // console.log(value);
  };

  return (
    <div>
      <NumberSection>
        <p className="error">{error}</p>
        <div className="number-section">
          {ary.map((value, i) => (
            <Number
              isSelected={value === selectNum}
              key={i}
              onClick={() => handleSelectNumber(value)}
            >
              {value}
            </Number>
          ))}
        </div>
        <p>Select Number</p>
      </NumberSection>
    </div>
  );
}

export default SelectNumber;

const NumberSection = styled.div`
  /* border: 3px solid gainsboro; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  .error {
    color: #ff0c0c;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .number-section {
    /* border: 1px dashed; */
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 30px;
    width: 552px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Number = styled.h3.attrs((props) => ({
  isSelected: props.isSelected,
}))`
  display: flex;
  width: 72px;
  /* height: 72px; */
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  cursor: pointer;
`;
