export default function Turn({ turn, winner }) {
  if (winner !== undefined) return;
  return <p>{turn} turn</p>;
}
