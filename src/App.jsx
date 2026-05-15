import { useState } from 'react'
import './App.css'

function App() {
  const [clues, setClues] = useState([
    { id: 1, title: "Sample Clue", category: "Evidence", description: "Initial setup" }
  ]);

  const handleAddClue = (newClue) => {
    setClues([...clues, newClue]);
  };

  return (
    <div className="app-container">
      <h1>Detective Case Board</h1>
      {/* Person A will work here */}
      <div className="ui-section" style={{border: '1px dashed gray'}}>
        <p>AddClueForm Placeholder</p>
      </div>
      
      {/* Person B will work here */}
      <div className="board-section" style={{border: '1px dashed blue'}}>
        <p>DetectiveBoard Placeholder</p>
      </div>
    </div>
  )
}

export default App