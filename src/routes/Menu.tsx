import { useTheme } from '../context/ThemeContext';

export default function Menu() {
  const { theme, menu, isDark, toggleDarkMode } = useTheme();

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: '700',
          textShadow: isDark ? '0 1px 3px rgba(0,0,0,0.7)' : '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        Menu
      </h2>

      <button
        onClick={toggleDarkMode}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: isDark ? '#444' : '#007bff',
          color: isDark ? '#eee' : '#fff',
          boxShadow: isDark
            ? '0 4px 8px rgba(255,255,255,0.2)'
            : '0 4px 8px rgba(0,123,255,0.3)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const btn = e.currentTarget;
          btn.style.backgroundColor = isDark ? '#666' : '#0056b3';
          btn.style.boxShadow = isDark
            ? '0 6px 12px rgba(255,255,255,0.3)'
            : '0 6px 12px rgba(0,86,179,0.5)';
        }}
        onMouseLeave={(e) => {
          const btn = e.currentTarget;
          btn.style.backgroundColor = isDark ? '#444' : '#007bff';
          btn.style.boxShadow = isDark
            ? '0 4px 8px rgba(255,255,255,0.2)'
            : '0 4px 8px rgba(0,123,255,0.3)';
        }}
      >
        Modo {isDark ? 'Claro' : 'Escuro'}
      </button>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          width: '100%',
          maxWidth: '400px',
          borderRadius: '10px',
          backgroundColor: isDark ? '#222' : '#fff',
          boxShadow: isDark
            ? '0 4px 10px rgba(0,0,0,0.7)'
            : '0 4px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden',
        }}
      >
        {menu.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '1rem 1.5rem',
              borderBottom: isDark ? '1px solid #444' : '1px solid #eee',
              fontSize: '1.1rem',
              fontWeight: '500',
              cursor: 'default',
            }}
          >
            {item.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
