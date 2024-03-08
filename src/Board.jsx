import { useState } from "react";
import { Square } from "./Square.jsx";
import { CalculateWinner } from "./CalculateWinner.jsx";

export function Board() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    // checks first if the square is not null. returns early if it is not null.
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext === true) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquare(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = CalculateWinner(squares);

  let status;

  if (winner) {
    status = "The Winner is " + winner;
  } else {
    status = "The Next Player is " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">
        {" "}
        <p>{status}</p>{" "}
      </div>
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
    </>
  );
}
