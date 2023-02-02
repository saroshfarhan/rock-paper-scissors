import React from "react";
import triangleBg from "../assets/bg-triangle.svg";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";

function Game() {
  return (
    <div id="game-container" className="mx-26 mt-32 grid place-content-center">
      <div id="elements-container" className="relative w-[20rem]">
        <img
          src={triangleBg}
          alt="triangle background"
          className="absolute z-0"
        />
        <div id="upper-hands" className="flex justify-between">
          <div
            id="bg-container-paper"
            className="z-10 -mt-[4rem] -ml-[2rem] flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-gradient-to-t from-paperStart to-paperEnd hover:cursor-pointer"
          >
            <div
              id="img-container-paper"
              className="z-10 flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-white"
            >
              <img src={paper} alt="paper" />
            </div>
          </div>

          <div
            id="bg-container-scissor"
            className="z-10 -mt-[4rem] -mr-[2rem] flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-gradient-to-t from-scissiorsStart to-scissiorsEnd hover:cursor-pointer"
          >
            <div
              id="img-container-scissor"
              className="z-10 flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-white"
            >
              <img src={scissor} alt="scissor" />
            </div>
          </div>
        </div>
        <div
          id="lower-hand-container"
          className="absolute top-[150px] left-[85px] z-0 flex h-[10rem] w-[10rem] items-center justify-center rounded-full bg-gradient-to-t from-rockStart to-rockEnd hover:cursor-pointer"
        >
          <div
            id="img-container-rock"
            className="z-10 flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-white"
          >
            <img src={rock} alt="rock" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
