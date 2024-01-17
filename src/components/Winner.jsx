export default function Winner({ winner }) {
  if (winner === undefined) return;
  return <p>{winner} winner</p>;
}
