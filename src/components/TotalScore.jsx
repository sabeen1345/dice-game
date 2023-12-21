import React from 'react'
import styled from 'styled-components'

function TotalScore() {
  return (
    <ScoreSection>
        <div>

       <div className="score-section">
          <h1>0</h1>
          <p>Total Score</p>
        </div>
        
        </div>
    </ScoreSection>
  )
}

export default TotalScore

const ScoreSection = styled.div`
    
    .score-section {
      /* border: 4px solid; */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      & h1 {
        /* color: #000;
        font-family: Poppins;
        font-size: 100px;
        font-style: normal;
        font-weight: 500;
        line-height: normal; */
      }
      & p {
        color: #000;
        font-family: Poppins;
        /* font-size: 24px; */
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  
  `;