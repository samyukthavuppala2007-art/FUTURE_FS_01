const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, #0f172a, #111827)' }}>
      <div style={{ maxWidth: '900px', textAlign: 'center' }}>
        <p style={{ color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem' }}>Hello, I’m</p>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', margin: '0.5rem 0', color: '#f8fafc' }}>Samyuktha Vuppala</h1>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>I build modern, responsive, and user-focused web experiences with a strong eye for detail and performance.</p>
        <a href="#projects" style={{ display: 'inline-block', padding: '0.8rem 1.4rem', background: '#38bdf8', color: '#082f49', borderRadius: '999px', textDecoration: 'none', fontWeight: '700' }}>View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
