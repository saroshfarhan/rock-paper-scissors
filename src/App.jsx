import React, { useState } from "react";
import Game from "./components/game";
import Rules from "./components/rules";
import Decider from "./components/decider";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [chosen, setChosen] = useState(false);

  const handlePlayAgain = () => {
    setChosen(false);
    setUserChoice("");
    console.log("play again clicked");
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setChosen(true);
  };

  return (
    <div className="container mx-auto">
      <div
        id="score-container"
        className="mx-48 mt-10 flex items-center justify-between rounded-xl border-2 border-headerOutline px-6 py-4"
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
          <h1 className="mt-2 text-[4rem] font-bold">12</h1>
        </div>
      </div>
      <div className="h-[20rem]">
        {chosen ? (
          <Decider userChoice={userChoice} playAgain={handlePlayAgain} />
        ) : (
          <Game handleUserChoice={handleUserChoice} />
        )}
      </div>

      <Rules />
    </div>
  );
}

export default App;
