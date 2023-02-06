import React from "react";

// Randomly picks any sign from the hands array
const housePick = () => {
  const hands = ["rock", "paper", "scissor"];
  return hands[Math.floor(Math.random() * hands.length)];
};

/*
scenarios
user    house    result
paper   rock     user
paper   scissor  house
scissor rock     house
scissor paper    user
rock    paper    house
rock    scissor  user
*/
/*
Function to decide winner 
@params user's choice, house's choice
returns outcome of the game
*/
const declareWinner = (user, house) => {
  console.log("userchoice " + user);
  console.log("houseChoice " + house);
  if (user === house) {
    return "draw";
  } else if (
    (user === "paper" && house === "rock") ||
    (user === "scissor" && house === "paper") ||
    (user === "rock" && house === "scissor")
  ) {
    return "user";
  } else {
    return "house";
  }
};

function Decider({ userChoice, playAgain }) {
  return (
    <div>
      <h1>Decider division</h1>
      <p>{declareWinner(userChoice, housePick())}</p>
      <button type="button" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
}

export default Decider;
