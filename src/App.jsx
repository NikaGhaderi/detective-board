import { useState } from 'react'
import DetectiveBoard from './components/DetectiveBoard'
import './App.css'

function App() {
  const [clues, setClues] = useState([
    { id: 1, title: "Sample Clue", category: "Evidence", description: "Initial setup" },
    { id: 2, title: "Mr. Green", category: "Suspects", description: "No alibi for 9PM" } // Added another dummy data for testing
  ]);

  const handleAddClue = (newClue) => {
    setClues([...clues, newClue]);
  };

  return (
    <div className="app-container" style={{ padding: '20px' }}>
      <h1>Detective Case Board</h1>
      
      {/* Person A will work here */}
      <div className="ui-section" style={{marginBottom: '30px'}}>
        <p style={{color: 'gray'}}>AddClueForm Placeholder</p>
      </div>
      
      {/* Person B's work rendered here */}
      <div className="board-section">
        <DetectiveBoard clues={clues} />
      </div>
    </div>
  )
}

export default App