const skills = ['React', 'JavaScript', 'CSS', 'Tailwind', 'Node.js', 'Git'];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#f8fafc', marginBottom: '1rem' }}>Skills</h2>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {skills.map((skill) => (
          <span key={skill} style={{ background: '#1e293b', color: '#e2e8f0', padding: '0.7rem 1rem', borderRadius: '999px' }}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
