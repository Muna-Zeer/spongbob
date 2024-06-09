import React, { useState } from "react";

function AppAnswer() {
  const [computerNumber, setComputerNumber] = useState(Math.floor(Math.random() * 6));
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [winnerCount, setWinnerCount] = useState(0);
  const [loserCount, setLoserCount] = useState(0);

  
  // Function to generate a random number between 1 and 100
  const randomNumberInRange = () => {
    return Math.floor(Math.random() * 100)+1;
  };

  // Function to generate six random numbers and set them in state
  const generateRandomNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 6; i++) {
      numbers.push(randomNumberInRange());
    }
    setRandomNumbers(numbers);
    // const computerNumberIndex = Math.floor(Math.random() * 6);
  //  const guessNumber = numbers[computerNumber];
    setComputerNumber(numbers[computerNumber]);
  };

  // Function to handle when a user clicks on a number
  const handleNumberClick = (number) => {
    if (number === computerNumber) {
      setWinnerCount(winnerCount + 1);
    } else {
      setLoserCount(loserCount + 1);
    }
  };

  // Function to handle when the "Generate Numbers" button is clicked
  const handleGenerateNumbersClick = () => {
    setComputerNumber(randomNumberInRange());
    generateRandomNumbers();
  };

  return (
    <div>
      <p>Computer Number: {computerNumber}</p>
      <p>Random Number Gusser</p>
      <p>
      <p>{winnerCount}
      <button onClick={handleGenerateNumbersClick}>new Game</button>
      {loserCount}</p></p>
      <p>__________________________________________________</p>
      <div>
        {randomNumbers.map((number, index) => (
          <button key={index} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppAnswer;