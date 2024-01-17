export default function Square({ cell, index, updateBoard }) {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className="square" onClick={handleClick}>
      {cell}
    </div>
  );
}
