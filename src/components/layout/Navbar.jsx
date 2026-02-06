import { useState, useEffect } from 'react';
import { FaSnapchatGhost, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeSection, isChatOpen, setIsChatOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', i: 1 },
    { name: 'About', href: '#about', i: 2 },
    { name: 'Experience', href: '#experience', i: 3 },
    { name: 'Skills', href: '#skills', i: 4 },
    { name: 'Education', href: '#education', i: 5 },
    { name: 'Certifications', href: '#certifications', i: 6 },
    { name: 'Projects', href: '#portfolio', i: 7 },
    { name: 'Contact', href: '#contact', i: 8 },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <div className="logo"><span>N</span>ikhil</div>

      <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setIsChatOpen(!isChatOpen); handleNavClick(); }}
            id="openChat"
          >
            <FaSnapchatGhost style={{ marginRight: '5px' }} /> AI
          </a>
        </li>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={activeSection === (link.href.substring(1)) ? 'active' : ''}
              style={{ '--i': link.i }}
              onClick={handleNavClick}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div
        id="menu-icon"
        className="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;
