import { useState } from 'react';

export default function AddClueForm({ onAddClue }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Suspects');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    
    onAddClue({ id: Date.now(), title, category, description });
    
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', backgroundColor: 'var(--accent-line)', opacity: 0.5 , borderRadius: '8px' }}>
      <input type="text" placeholder="Clue Title" value={title} onChange={e => setTitle(e.target.value)} required style={{ padding: '8px' }} />
      <select value={category} onChange={e => setCategory(e.target.value)} style={{ padding: '8px' }}>
        <option value="Suspects">Suspects</option>
        <option value="Evidence">Evidence</option>
        <option value="Leads">Leads</option>
      </select>
      <textarea placeholder="Description..." value={description} onChange={e => setDescription(e.target.value)} required style={{ padding: '8px', minHeight: '60px' }} />
      <button type="submit" style={{ 
        padding: '12px', 
        backgroundColor: 'var(--accent)',
        color: 'white', 
        border: 'none', 
        borderRadius: '6px', 
        fontWeight: '600',
        cursor: 'pointer' 
      }}>Add to Board</button>
    </form>
  );
}