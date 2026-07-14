import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', lineHeight: 1.6, color: '#e5e7eb', background: '#0f172a' }}>
      <Navbar />
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 20 }}>
        <ThemeToggle />
      </div>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
