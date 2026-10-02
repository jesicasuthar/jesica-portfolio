import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { SkillsArsenal } from './components/SkillsArsenal';
import { Footer } from './components/Footer';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    // Only track cursor on fine-pointer devices (desktops/laptops)
    if (window.matchMedia('(pointer: fine)').matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        if (!cursorVisible) setCursorVisible(true);
      };

      const handleMouseLeave = () => {
        setCursorVisible(false);
      };

      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [cursorVisible]);

  return (
    <div className="portfolio-app-root">
      {/* Background ambient lighting vignette */}
      <div className="ambient-background-glow glow-top" />
      <div className="ambient-background-glow glow-mid" />
      <div className="ambient-background-glow glow-bottom" />
      <div className="screen-frame-vignette" />

      {/* Dynamic subtle mouse aura */}
      {cursorVisible && (
        <div
          className="cursor-ambient-aura"
          style={{
            transform: `translate3d(${cursorPos.x - 250}px, ${cursorPos.y - 250}px, 0)`
          }}
          aria-hidden="true"
        />
      )}

      {/* Accessibility skip link */}
      <a href="#about" className="skip-to-content-link">
        Skip to main content
      </a>

      <Navbar />

      <main className="main-content-flow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <SkillsArsenal />
      </main>

      <Footer />
    </div>
  );
}
