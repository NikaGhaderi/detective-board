import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddClueForm from './components/AddClueForm'
import DetectiveBoard from './components/DetectiveBoard'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark');
  const [clues, setClues] = useState([
    { id: 1, title: "Sample Clue", category: "Evidence", description: "Initial setup" },
    { id: 2, title: "Mr. Green", category: "Suspects", description: "No alibi for 9PM" }
  ]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const handleAddClue = (newClue) => {
    setClues([...clues, newClue]);
  };

  return (
    <div className="app-container">
      <Header currentTheme={theme} onToggleTheme={handleToggleTheme} />
      
      <div className="ui-section">
        <AddClueForm onAddClue={handleAddClue} />
      </div>

      <div className="board-section">
        <DetectiveBoard clues={clues} />
      </div>
    </div>
  )
}

export default App