export default function ClueCard({ clue }) {
  return (
    <div className="clue-card" style={{
      backgroundColor: '#fdfd96',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      color: '#000',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.2)'
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{clue.title}</h3>
      <p style={{ margin: 0, fontSize: '14px' }}>{clue.description}</p>
    </div>
  );
}