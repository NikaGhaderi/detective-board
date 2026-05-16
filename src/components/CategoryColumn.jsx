import ClueCard from './ClueCard';

export default function CategoryColumn({ title, columnClues }) {
  return (
    <div className="category-column" style={{
      flex: 1,
      minWidth: '250px',
      backgroundColor: 'var(--code-bg)',
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid var(--border)'
    }}>
      <h2 style={{ textAlign: 'center', borderBottom: '2px solid var(--accent)', paddingBottom: '10px' }}>
        {title}
      </h2>
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