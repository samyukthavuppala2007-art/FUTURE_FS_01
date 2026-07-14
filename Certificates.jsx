const certificates = ['React Developer Certificate', 'Frontend Fundamentals', 'UI/UX Basics'];

const Certificates = () => {
  return (
    <section style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#f8fafc', marginBottom: '1rem' }}>Certificates</h2>
      <ul style={{ color: '#cbd5e1' }}>
        {certificates.map((certificate) => (
          <li key={certificate}>{certificate}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
