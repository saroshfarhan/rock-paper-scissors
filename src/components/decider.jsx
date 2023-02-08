import React from "react";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";

function Decider({ userChoice, playAgain, houseChoice, winner }) {
  const renderChoiceImage = (choice) => {
    switch (choice) {
      case "paper":
        return (
          <div
            id="bg-container-paper"
            className="flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-gradient-to-t from-paperStart to-paperEnd lg:h-[10rem] lg:w-[10rem]"
          >
            <div
              id="img-container-paper"
              className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-white lg:h-[7.5rem] lg:w-[7.5rem]"
            >
              <img
                src={paper}
                alt="paper icon"
                className="w-[2.4rem] lg:w-auto"
              />
            </div>
          </div>
        );
        break;

      case "scissor":
        return (
          <div
            id="bg-container-scissor"
            className="flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-gradient-to-t from-scissiorsStart to-scissiorsEnd lg:h-[10rem] lg:w-[10rem]"
          >
            <div
              id="img-container-scissor"
              className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-white lg:h-[7.5rem] lg:w-[7.5rem]"
            >
              <img
                src={scissor}
                alt="scissor icon"
                className="w-[2.4rem] lg:w-auto"
              />
            </div>
          </div>
        );
        break;

      case "rock":
        return (
          <div
            id="bg-container-rock"
            className="flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-gradient-to-t from-rockStart to-rockEnd lg:h-[10rem] lg:w-[10rem] "
          >
            <div
              id="img-container-rock"
              className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-white lg:h-[7.5rem] lg:w-[7.5rem]"
            >
              <img
                src={rock}
                alt="rock icon"
                className="w-[2.4rem] lg:w-auto"
              />
            </div>
          </div>
        );
        break;
      default:
        break;
    }
  };
  const desktopRender = (
    <div
      id="decider-container"
      className="mt-32 flex items-center justify-between text-white lg:mx-44"
    >
      <div
        id="user-choice"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="mb-8 text-center text-2xl uppercase tracking-widest">
          You Picked
        </h1>

        {renderChoiceImage(userChoice)}
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4 text-[3rem] font-extrabold uppercase tracking-widest">
          {winner}
        </p>
        <button
          type="button"
          onClick={playAgain}
          className="rounded-lg bg-white px-16 py-2 uppercase tracking-widest text-darkText hover:text-rockStart"
        >
          Play Again
        </button>{" "}
      </div>
      <div
        id="house-choice"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="mb-8 text-center text-2xl uppercase tracking-widest">
          The House Picked
        </h1>
        {renderChoiceImage(houseChoice)}
      </div>
    </div>
  );

  const MobileRender = (
    <div
      id="decider-container"
      className="mt-32 flex items-center justify-between text-white lg:mx-44"
    >
      <div
        id="user-choice"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="mb-8 text-center text-2xl uppercase tracking-widest">
          You Picked
        </h1>

        {renderChoiceImage(userChoice)}
      </div>

      <div
        id="house-choice"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="mb-8 text-center text-2xl uppercase tracking-widest">
          The House Picked
        </h1>
        {renderChoiceImage(houseChoice)}
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4 text-[3rem] font-extrabold uppercase tracking-widest">
          {winner}
        </p>
        <button
          type="button"
          onClick={playAgain}
          className="rounded-lg bg-white px-16 py-2 uppercase tracking-widest text-darkText hover:text-rockStart"
        >
          Play Again
        </button>{" "}
      </div>
    </div>
  );

  return (
    <>
      <div
        id="decider-container"
        className="mx-6 mt-20 flex-col items-center justify-between text-white lg:mx-44 lg:mt-32 lg:flex lg:flex-row"
      >
        {/* Fpr large screens this will display */}
        <div
          id="user-choice"
          className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center"
        >
          <h1 className="mb-8 text-center text-2xl uppercase tracking-widest">
            You Picked
          </h1>

          {renderChoiceImage(userChoice)}
        </div>
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
          <p className="mb-4 text-[3rem] font-extrabold uppercase tracking-widest">
            {winner}
          </p>
          <button
            type="button"
            onClick={playAgain}
            className="rounded-lg bg-white px-16 py-2 uppercase tracking-widest text-darkText hover:text-rockStart"
          >
            Play Again
          </button>{" "}
        </div>
        <div
          id="house-choice"
          className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center"
        >
          <h1 className="mb-8 text-center text-2xl uppercase tracking-widest">
            The House Picked
          </h1>
          {renderChoiceImage(houseChoice)}
        </div>
        {/* division for Desktop ends */}

        {/* This devision alignment is for mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <div
            id="user-choice"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="mb-8 text-center text-xl uppercase tracking-widest">
              You Picked
            </h1>

            {renderChoiceImage(userChoice)}
          </div>

          <div
            id="house-choice"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="mb-8 text-center text-xl uppercase tracking-widest">
              The House Picked
            </h1>
            {renderChoiceImage(houseChoice)}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center lg:hidden">
          <p className="mb-4 text-[3rem] font-extrabold uppercase tracking-widest">
            {winner}
          </p>
          <button
            type="button"
            onClick={playAgain}
            className="rounded-lg bg-white px-16 py-2 uppercase tracking-widest text-darkText hover:text-rockStart"
          >
            Play Again
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default Decider;
