import { motion } from 'framer-motion';
import { FaPhone, FaGlobeAmericas, FaEnvelope, FaGraduationCap, FaCheck } from 'react-icons/fa';
import { SiResearchgate, SiScopus } from 'react-icons/si';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About</h2>
          <p className="section-intro" style={{ textAlign: 'justify' }}>
            Prof. Bahaa Eddine Elbaghazaoui is a distinguished Research Professor at ENSA Beni Mellal and an accomplished
            Senior Full-Stack Developer specializing in Artificial Intelligence and advanced software architecture. Having earned
            his Ph.D. in Informatics & Artificial Intelligence from IBN TOFAIL University in December 2023, he brings more than 7 years
            of extensive experience in AI research, DevSecOps implementation, enterprise software architecture, and digital
            transformation initiatives. His work seamlessly bridges the gap between academic research and industry applications,
            where he actively contributes to advancing the field through innovative research, teaching future generations of
            engineers, and providing expert consultation on cutting-edge technology solutions.
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-image" variants={itemVariants}>
            <img src="/assets/img/logo_avatar.png" alt="Prof. Bahaa Eddine ELBAGHAZAOUI" />
          </motion.div>

          <motion.div className="about-details" variants={itemVariants}>
            <h3>Research Professor & Full-Stack Developer</h3>
            <p className="about-description" style={{ textAlign: 'justify' }}>
              Bahaa Eddine Elbaghzaoui is a Research Professor at ENSA Beni Mellal and a passionate full-stack developer
              with a specialization in AI, DevSecOps, and software architecture. His work blends academia with industry,
              focusing on solving complex challenges through innovative technologies.
            </p>

            <div className="info-grid">
              <div className="info-item">
                <FaPhone className="info-icon" />
                <strong>Phone:</strong>
                <span>+212 6 68 70 22 02</span>
              </div>

              <div className="info-item">
                <FaGraduationCap className="info-icon" />
                <strong>Degree:</strong>
                <span>Ph.D. in Informatics & Artificial Intelligence</span>
              </div>

              <div className="info-item">
                <FaGlobeAmericas className="info-icon" />
                <strong>Country:</strong>
                <span>Morocco</span>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <strong>Email:</strong>
                <span>b.elbaghazaoui@usms.ac.ma</span>
              </div>

              <div className="info-item">
                <SiResearchgate className="info-icon" />
                <strong>ResearchGate:</strong>
                <a
                  href="https://www.researchgate.net/profile/Bahaa-Eddine-Elbaghazaoui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bahaa-Eddine-Elbaghazaoui
                </a>
              </div>

              <div className="info-item">
                <FaCheck className="info-icon" />
                <strong>Freelance:</strong>
                <span>Available</span>
              </div>

              <div className="info-item">
                <SiScopus className="info-icon" />
                <strong>Scopus:</strong>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57218899003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  57218899003
                </a>
              </div>
            </div>

            <p className="about-footer" style={{ textAlign: 'justify' }}>
              Bahaa Eddine has worked on a variety of research and development projects, aiming to bring real-world
              solutions through technology and innovation. His expertise lies in AI, DevSecOps, and software
              architecture, and he actively collaborates with academic and industry partners to push the boundaries of technology.
            </p>

            <a href="/resume/resume.pdf" download className="download-cv-btn">
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
