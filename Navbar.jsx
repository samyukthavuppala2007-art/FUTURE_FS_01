const Navbar = () => {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 10, background: '#111827', borderBottom: '1px solid #334155', padding: '1rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ color: '#f8fafc', fontSize: '1.2rem', fontWeight: '700', textDecoration: 'none' }}>My Portfolio</a>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About</a>
          <a href="#skills" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Skills</a>
          <a href="#projects" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
