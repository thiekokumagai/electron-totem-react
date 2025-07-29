import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const navigate = useNavigate();
  const { aplicarTema } = useTheme();

  const escolherTema = async (tema: string) => {
    await aplicarTema(tema);
    navigate('/menu');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        backgroundColor: '#f0f2f5',
        padding: '1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '3rem',
          color: '#333',
          fontWeight: '700',
          textShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        Totem Inovvati
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {['detran', 'inovvati', 'sefaz'].map((tema) => (
          <button
            key={tema}
            onClick={() => escolherTema(tema)}
            style={{
              flex: '1 1 100px',
              padding: '0.75rem 1.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#fff',
              backgroundColor: '#007bff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,123,255,0.3)',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0056b3';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 12px rgba(0,86,179,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#007bff';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 8px rgba(0,123,255,0.3)';
            }}
          >
            {tema.charAt(0).toUpperCase() + tema.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
