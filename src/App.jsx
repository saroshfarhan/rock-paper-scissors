import React, { useEffect, useState } from "react";
import Game from "./components/game";
import Rules from "./components/rules";
import Decider from "./components/decider";

function App() {
  //state to keep track of player's choice
  const [userChoice, setUserChoice] = useState("");
  //state to keep track of house's choice
  const [houseChoice, setHouseChoice] = useState("");
  //state to keep track if user has played or not
  const [chosen, setChosen] = useState(false);
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState(0);

  //lifted state function to handle play again
  const handlePlayAgain = () => {
    setChosen(false);
    setUserChoice("");
    setHouseChoice("");
  };

  //Function to handle user choice and update the states
  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setChosen(true);
    // Randomly picks any sign from the hands array
    const hands = ["rock", "paper", "scissor"];
    setHouseChoice(hands[Math.floor(Math.random() * hands.length)]);
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
    if (user === house) {
      setWinner("Draw");
    } else if (
      (user === "paper" && house === "rock") ||
      (user === "scissor" && house === "paper") ||
      (user === "rock" && house === "scissor")
    ) {
      setWinner("You Win");
      setScore((prevScore) => (prevScore += 1));
    } else {
      setWinner("You Lose");
      setScore((prevScore) =>
        prevScore === 0 ? (prevScore = 0) : (prevScore -= 1)
      );
    }
  };

  useEffect(() => {
    declareWinner(userChoice, houseChoice);
  }, [userChoice]);

  return (
    <div className="container mx-auto h-[100%]">
      <div
        id="score-container"
        className="mx-4 mt-8 flex items-center justify-between rounded-xl border-2 border-headerOutline py-4 px-4 lg:mx-48 lg:mt-10 lg:px-6 lg:py-4"
      >
        <section className="text-white">
          <h1 className="text-4xl font-extrabold uppercase">Rock</h1>
          <h1 className="text-4xl font-extrabold uppercase">Paper</h1>
          <h1 className="text-4xl font-extrabold uppercase">Scissors</h1>
        </section>
        <div className="relative grid h-[7.2rem] w-[8rem] place-content-center gap-0 rounded-lg bg-white text-center text-scoreText">
          <p className="absolute top-2 left-10 text-lg font-semibold uppercase tracking-wider">
            Score
          </p>
          <h1 className="mt-2 text-[4rem] font-bold text-darkText">{score}</h1>
        </div>
      </div>
      <div className="h-[48vh] lg:h-[20rem]">
        {chosen ? (
          <Decider
            userChoice={userChoice}
            playAgain={handlePlayAgain}
            houseChoice={houseChoice}
            winner={winner}
          />
        ) : (
          <Game handleUserChoice={handleUserChoice} />
        )}
      </div>

      <Rules />
    </div>
  );
}

export default App;
