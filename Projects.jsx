const projects = [
  { title: 'E-Commerce UI', description: 'A responsive storefront experience crafted with a modern visual system and smooth interactions.' },
  { title: 'Task Manager', description: 'A productivity-focused app built with React, featuring clean layouts and local data persistence.' },
  { title: 'Portfolio Site', description: 'A personal website designed to highlight creativity, achievements, and a polished digital presence.' }
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#f8fafc', marginBottom: '1rem' }}>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {projects.map((project) => (
          <div key={project.title} style={{ background: '#111827', border: '1px solid #334155', borderRadius: '12px', padding: '1rem' }}>
            <h3 style={{ color: '#f8fafc', marginTop: 0 }}>{project.title}</h3>
            <p style={{ color: '#cbd5e1' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
