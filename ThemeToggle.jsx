import { useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        border: '1px solid #475569',
        background: dark ? '#1e293b' : '#f8fafc',
        color: dark ? '#f8fafc' : '#0f172a',
        padding: '0.45rem 0.8rem',
        borderRadius: '999px',
        cursor: 'pointer'
      }}
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;
