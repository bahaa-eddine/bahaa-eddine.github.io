import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTyped } from '../hooks/useTyped';
import { FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { SiResearchgate, SiScopus, SiGooglescholar } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const [showScrollButton, setShowScrollButton] = useState(true);

  const typedText = useTyped(
    [
      'Research professor',
      'Trainer',
      'Architect Solution',
      'Fullstack Developer',
      'Freelancer'
    ],
    { typeSpeed: 100, deleteSpeed: 50, delayBetween: 2000 }
  );

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowScrollButton(window.scrollY < heroBottom - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Prof. Bahaa Eddine ELBAGHAZAOUI</h1>
        <p className="hero-subtitle">
          I'm <span className="typed-text">{typedText}</span>
          <span className="cursor">|</span>
        </p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/bahaa-eddine/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.researchgate.net/profile/Bahaa-Eddine-Elbaghazaoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
          >
            <SiResearchgate />
          </a>
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=57218899003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scopus"
          >
            <SiScopus />
          </a>
          <a
            href="https://scholar.google.com/citations?user=l1bQFdEAAAAJ&hl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
          >
            <SiGooglescholar />
          </a>
        </div>

        {showScrollButton && (
          <button
            className="scroll-down"
            onClick={scrollToNext}
            aria-label="Scroll to next section"
          >
            <FaArrowDown />
          </button>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
