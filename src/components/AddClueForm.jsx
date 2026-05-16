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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Clue Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="Suspects">Suspects</option>
        <option value="Evidence">Evidence</option>
        <option value="Leads">Leads</option>
      </select>
      <textarea placeholder="Description..." value={description} onChange={e => setDescription(e.target.value)} required />
      <button type="submit">Add to Board</button>
    </form>
  );
}