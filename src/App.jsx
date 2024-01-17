import Square from "./components/Square";
import Turn from "./components/Turn";
import Winner from "./components/Winner";
import useBoard from "./hooks/useBoard";

function App() {
  const { board, updateBoard, winner, turn } = useBoard();

  return (
    <main className="game">
      <h1>Tic Tac Toe</h1>
      <Turn turn={turn} winner={winner} />
      <Winner winner={winner} />

      <section className="board">
        {board.map((cell, index) => (
          <Square
            key={index}
            cell={cell}
            index={index}
            updateBoard={updateBoard}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
