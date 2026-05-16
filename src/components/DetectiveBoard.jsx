import CategoryColumn from './CategoryColumn';

export default function DetectiveBoard({ clues }) {
  // Filter the master array into categories
  const suspects = clues.filter(c => c.category === 'Suspects');
  const evidence = clues.filter(c => c.category === 'Evidence');
  const leads = clues.filter(c => c.category === 'Leads');

  return (
    <div className="detective-board" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '20px'
    }}>
      <CategoryColumn title="Suspects" columnClues={suspects} />
      <CategoryColumn title="Evidence" columnClues={evidence} />
      <CategoryColumn title="Leads" columnClues={leads} />
    </div>
  );
}