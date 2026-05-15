import { useState } from 'react'
import Header from './components/Header'
import AddClueForm from './components/AddClueForm'
import './App.css'

function App() {
  const [clues, setClues] = useState([
    { id: 1, title: "Sample Clue", category: "Evidence", description: "Initial setup" }
  ]);

  const handleAddClue = (newClue) => {
    setClues([...clues, newClue]);
  };

  return (
    <div className="app-container" style={{ padding: '20px' }}>
      <Header />
      
      <div className="ui-section" style={{marginBottom: '30px'}}>
        <AddClueForm onAddClue={handleAddClue} />
      </div>

      {/* Person B will work here */}
      <div className="board-section" style={{border: '1px dashed blue'}}>
        <p>DetectiveBoard Placeholder</p>
      </div>
    </div>
  )
}

export default App