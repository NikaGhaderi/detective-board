import { useState } from 'react'
import Header from './components/Header'
import AddClueForm from './components/AddClueForm'
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
      <Header />
      
      <div className="ui-section" style={{marginBottom: '30px'}}>
        <AddClueForm onAddClue={handleAddClue} />
      </div>
      
      <div className="board-section">
        <DetectiveBoard clues={clues} />
      </div>
    </div>
  )
}

export default App