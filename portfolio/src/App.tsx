import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Extracurricular } from './components/Extracurricular';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main className="portfolio-main">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Extracurricular />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
