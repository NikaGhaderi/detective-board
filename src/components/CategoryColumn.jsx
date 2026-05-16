import ClueCard from './ClueCard';

export default function CategoryColumn({ title, columnClues }) {
  return (
    <div className="category-column">
      <h2>{title}</h2>
      <div className="card-list">
        {columnClues.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'gray', fontSize: '14px' }}>No clues yet.</p>
        ) : (
          columnClues.map(clue => (
            <ClueCard key={clue.id} clue={clue} />
          ))
        )}
      </div>
    </div>
  );
}