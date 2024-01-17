import { useState } from "react";
import { checkEndGame, checkWinner } from "../utils/helpers";
import { TURNS } from "../utils/constants";

export default function useBoard() {
  const [turn, setTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(undefined);

  function updateBoard(index) {
    if (board[index] || winner !== undefined) return;

    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);

    const isWinner = checkWinner(newBoard);
    const isGameOver = checkEndGame(newBoard);
    if (isWinner) {
      setWinner(isWinner);
    } else if (isGameOver) {
      setWinner(TURNS.DRAW);
    }
  }
  return {
    turn,
    board,
    winner,
    updateBoard,
  };
}
