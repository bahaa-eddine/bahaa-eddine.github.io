import { FaLinkedin } from 'react-icons/fa';
import { SiResearchgate, SiScopus, SiGooglescholar } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer-title">Prof. Bahaa Eddine ELBAGHAZAOUI</h3>
        <p className="footer-description">
          I look forward to receiving your message and will get back to you as soon as possible. Feel free to reach out
          for any inquiries or collaboration opportunities.
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

        <div className="copyright">
          <span>Copyright © 2026</span> <strong>BE ELBAGHAZAOUI</strong> <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
