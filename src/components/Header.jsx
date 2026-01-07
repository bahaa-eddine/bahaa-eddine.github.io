import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaHome, FaUser, FaBriefcase, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <header className={`header ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="logo-container">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/assets/img/logo_avatar.png" alt="Logo" className="logo" />
          </Link>
        </div>

        <nav className="nav">
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              aria-label="Home"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={location.pathname === '/resume' ? 'active' : ''}
              aria-label="Resume"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser />
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link
              to="/research"
              className={location.pathname === '/research' ? 'active' : ''}
              aria-label="Research"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaBriefcase />
              <span>Research</span>
            </Link>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </header>
    </>
  );
};

export default Header;
