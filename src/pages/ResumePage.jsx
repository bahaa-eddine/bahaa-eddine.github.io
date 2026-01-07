import { motion } from 'framer-motion';
import { FaGraduationCap, FaDownload, FaFileAlt } from 'react-icons/fa';
import './ResumePage.css';

const ResumePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="resume-page">
      <motion.div
        className="resume-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Resume</h1>
        <p className="resume-subtitle">Professional Experience & Academic Background</p>
        <a href="/resume/resume.pdf" download className="download-resume-btn">
          <FaDownload /> Download Full Resume (PDF)
        </a>
      </motion.div>

      <div className="resume-content">
        {/* Resume Preview Section */}
        <motion.section
          className="resume-section resume-preview-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaFileAlt className="section-icon" />
            <h2>Resume Preview</h2>
          </motion.div>

          <motion.div className="resume-preview-container" variants={itemVariants}>
            <iframe
              src="/resume/resume.pdf"
              title="Resume PDF Preview"
              className="resume-pdf-viewer"
            />
            <div className="preview-overlay">
              <p>Click to download or view in full screen</p>
              <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="view-fullscreen-btn">
                View Full Screen
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="resume-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaGraduationCap className="section-icon" />
            <h2>Education</h2>
          </motion.div>

          <motion.div className="timeline" variants={itemVariants}>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">2020 - 2023</span>
                <h3>Ph.D. in Informatics & Artificial Intelligence</h3>
                <h4>IBN TOFAIL University, Morocco</h4>
                <ul>
                  <li>Dissertation: Advanced machine learning techniques for data governance and security</li>
                  <li>Published multiple peer-reviewed papers in international conferences</li>
                  <li>Received excellence award for research contributions</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">Earlier</span>
                <h3>Master's & Bachelor's Degrees</h3>
                <h4>Computer Science & Engineering</h4>
                <ul>
                  <li>Specialized in software engineering and distributed systems</li>
                  <li>Graduated with honors and distinction</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="resume-section skills-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Skills</h2>
          </motion.div>

          <motion.div className="skills-grid-enhanced" variants={itemVariants}>
            <div className="skill-category-enhanced">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span>Java</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>PHP</span>
                <span>C/C++</span>
                <span>SQL</span>
                <span>NoSQL</span>
              </div>
            </div>

            <div className="skill-category-enhanced">
              <h3>Web Technologies</h3>
              <div className="skill-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>React</span>
                <span>Angular</span>
                <span>Vue.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Spring Boot</span>
                <span>Django</span>
                <span>Flask</span>
                <span>Laravel</span>
              </div>
            </div>

            <div className="skill-category-enhanced">
              <h3>Mobile Development</h3>
              <div className="skill-tags">
                <span>React Native</span>
                <span>Flutter</span>
                <span>Android</span>
                <span>iOS</span>
              </div>
            </div>

            <div className="skill-category-enhanced">
              <h3>AI & Machine Learning</h3>
              <div className="skill-tags">
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Scikit-learn</span>
                <span>Keras</span>
                <span>OpenCV</span>
                <span>NLP</span>
                <span>Computer Vision</span>
                <span>Deep Learning</span>
                <span>Neural Networks</span>
              </div>
            </div>

            <div className="skill-category-enhanced">
              <h3>DevOps & Cloud</h3>
              <div className="skill-tags">
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Jenkins</span>
                <span>GitLab CI/CD</span>
                <span>GitHub Actions</span>
                <span>AWS</span>
                <span>Azure</span>
                <span>Google Cloud</span>
                <span>Terraform</span>
                <span>Ansible</span>
              </div>
            </div>

            <div className="skill-category-enhanced">
              <h3>Databases</h3>
              <div className="skill-tags">
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Redis</span>
                <span>Elasticsearch</span>
                <span>Cassandra</span>
                <span>Oracle</span>
                <span>SQL Server</span>
              </div>
            </div>

            <div className="skill-category-enhanced">
              <h3>Architecture & Design</h3>
              <div className="skill-tags">
                <span>Microservices</span>
                <span>RESTful APIs</span>
                <span>GraphQL</span>
                <span>Event-Driven Architecture</span>
                <span>Domain-Driven Design</span>
                <span>CQRS</span>
                <span>Serverless</span>
              </div>
            </div>

            <div className="skill-category-enhanced">
              <h3>Tools & Methodologies</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>Agile/Scrum</span>
                <span>JIRA</span>
                <span>Confluence</span>
                <span>UML</span>
                <span>Design Patterns</span>
                <span>TDD</span>
                <span>BDD</span>
              </div>
            </div>

            <div className="skill-category-enhanced">
              <h3>Security & Testing</h3>
              <div className="skill-tags">
                <span>OAuth</span>
                <span>JWT</span>
                <span>SSL/TLS</span>
                <span>Penetration Testing</span>
                <span>JUnit</span>
                <span>PyTest</span>
                <span>Selenium</span>
                <span>Jest</span>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResumePage;
