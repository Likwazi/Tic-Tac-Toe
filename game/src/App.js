import { useState } from "react";
import Square from "./components/Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const chooseSquare = (square) => {
    setBoard(
      board.map((value, index) => {
        if (index == square && value == "") {
          return player;
        }
        return value;
      })
    );

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };
  return (
    <div className="flex">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-teal-300 border-4 border-red-500 flex flex-col">
          <div className="flex flex-col basis-1/3">
            <Square
              val={board[0]}
              chooseSquare={() => {
                chooseSquare(0);
              }}
            />
            <Square
              val={board[1]}
              chooseSquare={() => {
                chooseSquare(1);
              }}
            />
            <Square
              val={board[2]}
              chooseSquare={() => {
                chooseSquare(2);
              }}
            />
          </div>
          <div className="flex flex-col basis-1/3"></div>
          <div className="flex flex-col basis-1/3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
