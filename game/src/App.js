import { useState, useEffect } from "react";
import Square from "./components/Square";
import { Patterns } from "./components/Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);
  useEffect(() => {
    if (result.state != "none") {
      alert(`Game finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);
  const chooseSquare = (square) => {
    setBoard(
      board.map((value, index) => {
        if (index == square && value == "") {
          return player;
        }
        return value;
      })
    );
  };
  const checkWin = (board) => {
    Patterns.forEach((currPattern) => {
      const firstPlace = board[currPattern[0]];
      if (firstPlace == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((index) => {
        if (board[index] != firstPlace || firstPlace == "") {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: firstPlace, state: "won" });
      }
    });
  };
  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
      if (filled) {
        setResult({ winner: "none", state: "tie" });
        console.log("tie");
      }
    });
  };
  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
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
          <div className="flex flex-col basis-1/3">
            <Square
              val={board[3]}
              chooseSquare={() => {
                chooseSquare(3);
              }}
            />
            <Square
              val={board[4]}
              chooseSquare={() => {
                chooseSquare(4);
              }}
            />
            <Square
              val={board[5]}
              chooseSquare={() => {
                chooseSquare(5);
              }}
            />
          </div>
          <div className="flex flex-col basis-1/3">
            <Square
              val={board[6]}
              chooseSquare={() => {
                chooseSquare(6);
              }}
            />
            <Square
              val={board[7]}
              chooseSquare={() => {
                chooseSquare(7);
              }}
            />
            <Square
              val={board[8]}
              chooseSquare={() => {
                chooseSquare(8);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
