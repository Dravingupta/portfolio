import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';
import logoImg from '../assets/image3.png';
import '../css/theme-animation.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 id="logo">
          <a href="/">
            <img src={logoImg} alt="Your Logo" />
          </a>
        </h1>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a className="nav-link" href="#projects">PROJECTS</a></li>
          <li><a className="nav-link" href="https://www.linkedin.com/in/dravingupta">CONTACT</a></li>
          <li>
            <a
              className="nav-link btn btn-primary"
              href="https://github.com/CommunityPro/portfolio-html"
            >
              RESUME <i className="fas fa-arrow-right"></i>
            </a>
          </li>

          <div className="theme-switch">
            <input
              type="checkbox"
              id="switch"
              checked={isDark}
              onChange={handleThemeToggle}
            />
            <label className="toggle-icons" htmlFor="switch">
              {!isDark && <img className="moon animate-rotate" src={moonIcon} alt="Moon" />}
              {isDark && <img className="sun animate-rotate" src={sunIcon} alt="Sun" />}
            </label>
          </div>
        </ul>

        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
