import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-items');
        } else {
          // Optional: remove class to re-trigger
          // entry.target.classList.remove('show-items');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.scroll-scale, .scroll-bottom, .scroll-top');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }); // Run on every render/update to catch new elements if necessary, or empty deps [] if static

  return (
    <div className="App">
      <Navbar activeSection={activeSection} isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />

      <main>
        <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
