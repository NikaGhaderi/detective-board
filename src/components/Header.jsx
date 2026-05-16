export default function Header({ currentTheme, onToggleTheme }) {
  return (
    <header style={{ 
      position: 'relative',
      textAlign: 'center', 
      padding: '30px 20px', 
      backgroundColor: 'var(--code-bg)', 
      color: 'var(--text-h)', 
      borderRadius: '12px', 
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow)',
      marginBottom: '35px' 
    }}>
      <button 
        onClick={onToggleTheme}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          padding: '8px 12px',
          backgroundColor: 'var(--bg)',
          color: 'var(--text-h)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.2s ease'
        }}
      >
        {currentTheme === 'dark' ? '☀️ Light Ops' : '🌙 Night Ops'}
      </button>

      <h1 style={{ margin: '0 0 8px 0', fontSize: '32px', letterSpacing: '-0.5px' }}>
        Active Case Files
      </h1>
      <p style={{ margin: 0, color: 'var(--text)', fontSize: '16px' }}>
        Classified Detective Dashboard
      </p>
    </header>
  );
}
