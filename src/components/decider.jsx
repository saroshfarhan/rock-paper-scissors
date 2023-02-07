import React from "react";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";

function Decider({ userChoice, playAgain, houseChoice }) {
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
      return "Draw";
    } else if (
      (user === "paper" && house === "rock") ||
      (user === "scissor" && house === "paper") ||
      (user === "rock" && house === "scissor")
    ) {
      return "You Win";
    } else {
      return "You Lose";
    }
  };

  const renderChoiceImage = (choice) => {
    switch (choice) {
      case "paper":
        return (
          <div
            id="bg-container-paper"
            className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-gradient-to-t from-paperStart to-paperEnd"
          >
            <div
              id="img-container-paper"
              className="flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-white"
            >
              <img src={paper} alt="paper icon" />
            </div>
          </div>
        );
        break;

      case "scissor":
        return (
          <div
            id="bg-container-scissor"
            className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-gradient-to-t from-scissiorsStart to-scissiorsEnd"
          >
            <div
              id="img-container-scissor"
              className="flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-white"
            >
              <img src={scissor} alt="scissor icon" />
            </div>
          </div>
        );
        break;

      case "rock":
        return (
          <div
            id="bg-container-rock"
            className="flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-gradient-to-t from-rockStart to-rockEnd "
          >
            <div
              id="img-container-rock"
              className="flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-white"
            >
              <img src={rock} alt="rock icon" />
            </div>
          </div>
        );
        break;
      default:
        break;
    }
  };
  return (
    <div
      id="decider-container"
      className="mx-44 mt-32 flex items-center justify-between text-white"
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
          {declareWinner(userChoice, houseChoice)}
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
}

export default Decider;
