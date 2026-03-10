import { useState } from "react";
import { Square } from "./components";

export const TicTacToeBoard = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(i: number) {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div>{status}</div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
        width: 'max-content'
      }}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a]; // either 'X' or 'O'
    }
  }

  return null;
}

