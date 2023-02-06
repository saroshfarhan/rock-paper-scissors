import React from "react";

const hands = ["rock", "paper", "scissor"];
// Randomly picks any sign from the hands array
const housePick = () => {
  return hands[Math.floor(Math.random() * hands.length)];
};

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

function Decider({ userChoice, playAgain }) {
  return (
    <div>
      <h1>Decider division</h1>
      <p>{declareWinner(userChoice, housePick())}</p>
      <button type="button" onClick={playAgain}>
        Play Again
      </button>
      {/* {console.log(declareWinner(userChoice, housePick()))} */}
    </div>
  );
}

export default Decider;
