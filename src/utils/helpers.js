import { WINNER_COMBINATIONS } from "./constants";

export function checkWinner(board) {
  for (const combo of WINNER_COMBINATIONS) {
    const [a, b, c] = combo;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

export function checkEndGame(board) {
  return board.every((cell) => cell !== null);
}
