import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      style={{ height: "40px", width: "40px", padding: "20px", margin: "1px" }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const arrCopy = squares.slice();
    if (xIsNext) {
      arrCopy[i] = "X";
    } else {
      arrCopy[i] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(arrCopy);
  };
  const winner = calculateWinner(squares);
  const isDraw = squares.every((square) => square !== null) && !winner;

  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else if (isDraw) {
    status = "It's a Draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button id="reset" onClick={handleReset}>
        Reset Game
      </button>
    </>
  );
}
