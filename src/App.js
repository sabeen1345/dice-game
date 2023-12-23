
// App.js
import React, { useState } from 'react';
import DiceGame from './components/DiceGame';
import PlayGame from './components/PlayGame';

function App() {
  const [showDiceGame, setShowDiceGame] = useState(true);

  const toggleGame = () => {
    setShowDiceGame(!showDiceGame);
  };

  return (
    <div>
      {showDiceGame ? <DiceGame toggleGame={toggleGame} /> : <PlayGame toggleGame={toggleGame} />}
    </div>
  );
}

export default App;





