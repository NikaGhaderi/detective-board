export default function ClueCard({ clue }) {
  return (
    <div className="clue-card">
      <h3>{clue.title}</h3>
      <p>{clue.description}</p>
    </div>
  );
}