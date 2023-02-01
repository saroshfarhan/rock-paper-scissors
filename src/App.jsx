import React from "react";
import Game from "./conponents/game";

function App() {
  return (
    <div className="container mx-auto">
      <div
        id="score-container"
        className="mx-32 mt-10 flex items-center justify-between rounded-xl border border-white px-6 py-4"
      >
        <section className="text-white">
          <h1 className="text-4xl font-extrabold uppercase">Rock</h1>
          <h1 className="text-4xl font-extrabold uppercase">Paper</h1>
          <h1 className="text-4xl font-extrabold uppercase">Scissors</h1>
        </section>
        <div className="grid h-[7.2rem] w-[8rem] place-content-center gap-0 rounded-lg bg-white text-center text-scoreText">
          <p className="text-sm font-semibold uppercase">Score</p>
          <h1 className="text-[3rem] font-bold">12</h1>
        </div>
      </div>
      <Game />
    </div>
  );
}

export default App;
