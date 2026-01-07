import { motion } from 'framer-motion';
import { FaBook, FaFileAlt, FaLightbulb, FaNewspaper, FaBookOpen, FaBinoculars } from 'react-icons/fa';
import { SiResearchgate, SiScopus, SiGooglescholar } from 'react-icons/si';
import './ResearchPage.css';

const ResearchPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="research-page">
      <motion.div
        className="research-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Research & Publications</h1>
        <p className="research-subtitle">
          Advancing the frontiers of Artificial Intelligence, Machine Learning, and Software Engineering
        </p>

        <div className="research-profiles">
          <a
            href="https://www.researchgate.net/profile/Bahaa-Eddine-Elbaghazaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <SiResearchgate /> ResearchGate
          </a>
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=57218899003"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <SiScopus /> Scopus
          </a>
          <a
            href="https://scholar.google.com/citations?user=l1bQFdEAAAAJ&hl"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <SiGooglescholar /> Google Scholar
          </a>
        </div>
      </motion.div>

      <div className="research-content">
        <motion.section
          className="research-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaLightbulb className="section-icon" />
            <h2>Research Interests</h2>
          </motion.div>

          <motion.div className="interests-grid" variants={itemVariants}>
            <div className="interest-card">
              <h3>Artificial Intelligence & Machine Learning</h3>
              <p style={{ textAlign: 'justify' }}>
                Exploring advanced machine learning algorithms, deep learning architectures, and their
                applications in solving real-world problems. Focus on developing intelligent systems
                that can learn, adapt, and make decisions autonomously.
              </p>
            </div>

            <div className="interest-card">
              <h3>Data Governance & Security</h3>
              <p style={{ textAlign: 'justify' }}>
                Investigating frameworks and methodologies for ensuring data quality, privacy, and
                security in AI systems. Developing solutions for compliance with data protection
                regulations while maintaining system performance.
              </p>
            </div>

            <div className="interest-card">
              <h3>DevSecOps & Cloud Computing</h3>
              <p style={{ textAlign: 'justify' }}>
                Researching integration of security practices into DevOps workflows, automated security
                testing, and secure cloud infrastructure design. Focus on building resilient and
                secure distributed systems.
              </p>
            </div>

            <div className="interest-card">
              <h3>Software Architecture & Design</h3>
              <p style={{ textAlign: 'justify' }}>
                Studying modern architectural patterns, microservices design, and scalable system
                architectures. Emphasis on building maintainable, performant, and resilient software
                systems.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Books */}
        <motion.section
          className="research-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaBook className="section-icon" />
            <h2>Books (Editor)</h2>
          </motion.div>

          <motion.div className="publications-list" variants={itemVariants}>
            <div className="publication-item">
              <span className="pub-year">2026</span>
              <div className="pub-content">
                <h3>Generative AI Applications and Intelligent Systems: From Chatbots to Cybersecurity</h3>
                <p className="pub-venue">IGI Global Scientific Publishing, 2026</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al. (editors)</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.4018/979-8-3373-8011-7" target="_blank" rel="noopener noreferrer">10.4018/979-8-3373-8011-7</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2026</span>
              <div className="pub-content">
                <h3>Generative AI-Powered Data Architectures: From Governance to Autonomous Analytics</h3>
                <p className="pub-venue">IGI Global Scientific Publishing, 2026</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al. (editors)</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.4018/979-8-3373-5616-7" target="_blank" rel="noopener noreferrer">10.4018/979-8-3373-5616-7</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2025</span>
              <div className="pub-content">
                <h3>Data Governance, DevSecOps, and Advancements in Modern Software</h3>
                <p className="pub-venue">IGI Global Scientific Publishing, 2025</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al. (editors)</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.4018/979-8-3373-0365-9" target="_blank" rel="noopener noreferrer">10.4018/979-8-3373-0365-9</a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Journal Articles */}
        <motion.section
          className="research-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaNewspaper className="section-icon" />
            <h2>Journal Articles</h2>
          </motion.div>

          <motion.div className="publications-list" variants={itemVariants}>
            <div className="publication-item">
              <span className="pub-year">In Press</span>
              <div className="pub-content">
                <h3>Integrating security within DevOps for continuous protection: Securing software development through unified practices</h3>
                <p className="pub-venue">International Journal of Computer Applications in Technology (IJCAT) Q2, Special Issue: Recent Advances in Information Retrieval and Recommendation Systems</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al.</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2025</span>
              <div className="pub-content">
                <h3>Comparative analysis of machine learning models for fake news detection in social media</h3>
                <p className="pub-venue">IAES International Journal of Artificial Intelligence (IJ-AI) Q2, v. 14, n. 3, p. 1951-1959</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al.</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.11591/ijai.v14.i3.pp1951-1959" target="_blank" rel="noopener noreferrer">10.11591/ijai.v14.i3.pp1951-1959</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2023</span>
              <div className="pub-content">
                <h3>Predicting the next word using the Markov chain model according to profiling personality</h3>
                <p className="pub-venue">The Journal of Supercomputing (2023): 1-16. Q1, IF 3.3; CiteScore: 4.8; SNIP: 1.16</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.1007/s11227-023-05125-2" target="_blank" rel="noopener noreferrer">10.1007/s11227-023-05125-2</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2023</span>
              <div className="pub-content">
                <h3>Predicting user behavior using data profiling and hidden Markov model</h3>
                <p className="pub-venue">International Journal of Electrical & Computer Engineering 13.5 (2023). Q2. CiteScore: 3.8; SNIP: 0.704</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.11591/ijece.v13i5.pp5444-5453" target="_blank" rel="noopener noreferrer">10.11591/ijece.v13i5.pp5444-5453</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>Data profiling and machine learning to identify influencers from social media platforms</h3>
                <p className="pub-venue">Journal of ICT Standardization (2022): 201-218. Q3. CiteScore: 0.6; SNIP: 0.34</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.13052/jicts2245-800X.1026" target="_blank" rel="noopener noreferrer">10.13052/jicts2245-800X.1026</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2020</span>
              <div className="pub-content">
                <h3>Markov decision processes with discounted costs: New test of non-optimal actions</h3>
                <p className="pub-venue">Journal of Advanced Research in Dynamical and Control Systems, 2020, 12(5 Special Issue), pp. 608–616. Q3. CiteScore: 0.6; SNIP: 0.34</p>
                <p className="pub-authors">Semmouri, A., Jourhmane, M., Elbaghazaoui, B.E.</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2021</span>
              <div className="pub-content">
                <h3>Discounted Markov decision processes with constrained costs: The decomposition approach</h3>
                <p className="pub-venue">E3S Web of Conferences Q4. 2021, 229, 01047</p>
                <p className="pub-authors">Semmouri, A., Jourhmane, M., Elbaghazaoui, B.E.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Book Chapters */}
        <motion.section
          className="research-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaBookOpen className="section-icon" />
            <h2>Book Chapters</h2>
          </motion.div>

          <motion.div className="publications-list" variants={itemVariants}>
            <div className="publication-item">
              <span className="pub-year">2026</span>
              <div className="pub-content">
                <h3>Generative AI for Fake News Detection in Data Architectures: From Literature to Challenges and Future Directions</h3>
                <p className="pub-venue">Generative AI-Powered Data Architectures: From Governance to Autonomous Analytics, IGI Global Scientific Publishing, 2026, pp. 215-238</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al.</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.4018/979-8-3373-5616-7.ch009" target="_blank" rel="noopener noreferrer">10.4018/979-8-3373-5616-7.ch009</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2026</span>
              <div className="pub-content">
                <h3>A Comprehensive Review of Weight Initialization Strategies for CNNs in Remote Sensing</h3>
                <p className="pub-venue">Generative AI Applications and Intelligent Systems: From Chatbots to Cybersecurity, IGI Global Scientific Publishing, pp. 185-210</p>
                <p className="pub-authors">el moudden, T., Nai, S., Elbaghazaoui, B. E., & Amnai, M.</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.4018/979-8-3373-8011-7.ch008" target="_blank" rel="noopener noreferrer">10.4018/979-8-3373-8011-7.ch008</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2025</span>
              <div className="pub-content">
                <h3>Benchmarking Time-Series Forecasting Models for Smart Meter Data</h3>
                <p className="pub-venue">Advances in Intelligent Systems and Digital Applications. ISDA 2025. Lecture Notes in Networks and Systems, vol 1486. Springer, Cham</p>
                <p className="pub-authors">Moustati, I., Gherabi, N., Elbaghazaoui, B.E., Amnai, M.</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.1007/978-3-031-95330-9_11" target="_blank" rel="noopener noreferrer">10.1007/978-3-031-95330-9_11</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2025</span>
              <div className="pub-content">
                <h3>Embedding Security into DevOps: Achieving Continuous Protection and Harmonized Software Development Practices</h3>
                <p className="pub-venue">Data Governance, DevSecOps, and Advancements in Modern Software, IGI Global Scientific Publishing, 2025, pp. 155-168</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, and Rabha Allaoui</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.4018/979-8-3373-0365-9.ch008" target="_blank" rel="noopener noreferrer">10.4018/979-8-3373-0365-9.ch008</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2025</span>
              <div className="pub-content">
                <h3>Integrating Security in DataOps: A Framework for Securing Data Pipelines in Real-time Analytics</h3>
                <p className="pub-venue">Data Governance, DevSecOps, and Advancements in Modern Software, IGI Global Scientific Publishing, 2025, pp. 197-214</p>
                <p className="pub-authors">Soussane, K., Elbaghazaoui, B. E., & Amnai, M.</p>
                <p className="pub-description" style={{ textAlign: 'justify' }}>
                  DOI: <a href="https://doi.org/10.4018/979-8-3373-0365-9.ch010" target="_blank" rel="noopener noreferrer">10.4018/979-8-3373-0365-9.ch010</a>
                </p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>Influencer Profiling to Identify the Top Keywords Using LDA</h3>
                <p className="pub-venue">Computer Networks and Inventive Communication Technologies. Singapore: Springer Nature Singapore, 2022. 377-388</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>Voice Recognition and User Profiling</h3>
                <p className="pub-venue">International Conference on Cybersecurity, Cybercrimes, and Smart Emerging Technologies. Cham: Springer International Publishing, 2022</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>Optimized influencers profiling from social media based on Machine Learning</h3>
                <p className="pub-venue">Advances in Information, Communication and Cybersecurity. Springer International Publishing, 2022</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>User Profiling and Influence Maximization</h3>
                <p className="pub-venue">Mobile Computing and Sustainable Informatics. Singapore: Springer Nature Singapore, 2022. 221-232</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2021</span>
              <div className="pub-content">
                <h3>Data profiling over big data area: a survey of big data profiling: state-of-the-art, use cases and challenges</h3>
                <p className="pub-venue">Intelligent Systems in Big Data, Semantic Web and Machine Learning. Cham: Springer International Publishing, 2021. 111-123</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Abdellatif Semmouri</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>Markov Decision Processes with Discounted Rewards: Improved Successive Over-Relaxation Method</h3>
                <p className="pub-venue">Lecture Notes in Networks and Systems, 2022, 357 LNNS, pp. 229–238</p>
                <p className="pub-authors">Semmouri, A., Jourhmane, M., Elbaghazaoui, B.E.</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2021</span>
              <div className="pub-content">
                <h3>Markov Decision Processes with Discounted Rewards: New Action Elimination Procedure</h3>
                <p className="pub-venue">Lecture Notes in Business Information Processing, 2021, 416 LNBIP, pp. 223–238</p>
                <p className="pub-authors">Semmouri, A., Jourhmane, M., Elbaghazaoui, B.E.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Conference Papers */}
        <motion.section
          className="research-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaFileAlt className="section-icon" />
            <h2>Conference Proceedings</h2>
          </motion.div>

          <motion.div className="publications-list" variants={itemVariants}>
            <div className="publication-item">
              <span className="pub-year">2024</span>
              <div className="pub-content">
                <h3>Event Profiling in Social Media: A Survey with an Application</h3>
                <p className="pub-venue">2024 IEEE 4th International Conference on Innovative Research in Applied Science, Engineering and Technology (IRASET'2024). IEEE, 2024</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al.</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2023</span>
              <div className="pub-content">
                <h3>Profiling Language Sign Using Deep Learning</h3>
                <p className="pub-venue">10th International Conference on Wireless Networks and Mobile Communications (WINCOM). IEEE, 2023</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al.</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>Human profiling based on computer vision: A survey with application</h3>
                <p className="pub-venue">2022 IEEE 3rd International Conference on Electronics, Control, Optimization and Computer Science (ICECOCS). IEEE, 2022</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, et al.</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>Influencer Profiling to Identify the Top Keywords Using LDA</h3>
                <p className="pub-venue">Computer Networks and Inventive Communication Technologies: Proceedings of Fifth ICCNCT 2022. Singapore: Springer Nature Singapore, 2022, 377-388</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2022</span>
              <div className="pub-content">
                <h3>User Profiling and Influence Maximization</h3>
                <p className="pub-venue">Mobile Computing and Sustainable Informatics: Proceedings of ICMCSI 2022. Singapore: Springer Nature Singapore, 2022, 221-232</p>
                <p className="pub-authors">Elbaghazaoui, Bahaa Eddine, Mohamed Amnai, and Youssef Fakhri</p>
              </div>
            </div>

            <div className="publication-item">
              <span className="pub-year">2021</span>
              <div className="pub-content">
                <h3>Markov Decision Processes with Discounted Costs: Improved Successive Over-Relaxation Method</h3>
                <p className="pub-venue">Proceedings of the International Conference on Intelligent Vision and Computing, 392-402, 2021</p>
                <p className="pub-authors">Semmouri, A., Jourhmane, M., and Elbaghazaoui, B.E.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Reviews Section */}
        <motion.section
          className="research-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaBinoculars className="section-icon" />
            <h2>Peer Reviews & Conference Activities</h2>
          </motion.div>

          <motion.div className="reviews-container" variants={itemVariants}>
            <div className="review-category">
              <h3>Peer Review Activities</h3>
              <ul className="review-list">
                <li>Applied Intelligence (22 reviews)</li>
                <li>Education and Information Technologies (9 reviews)</li>
                <li>Soft Computing (6 reviews)</li>
                <li>The Journal of Supercomputing (3 reviews)</li>
                <li>International Journal of Information Security and Privacy (2 reviews)</li>
                <li>Frontiers in Digital Health (1 review)</li>
              </ul>
            </div>

            <div className="review-category">
              <h3>Conference Technical Program Committee</h3>
              <p style={{ textAlign: 'justify', marginBottom: '1rem' }}>
                Active member of technical program committees for numerous international conferences in AI,
                Machine Learning, Cloud Computing, and related fields. Selected conferences include:
              </p>
              <ul className="review-list conferences">
                <li>IEEE World Conference on Applied Intelligence and Computing (2022, 2023, 2024)</li>
                <li>International Conference on Advances in Data-driven Computing and Intelligent Systems (2023, 2024)</li>
                <li>World Conference on Artificial Intelligence: Advances and Applications (2024)</li>
                <li>International Conference on Business Intelligence and Data Analytics (2024)</li>
                <li>Congress on Smart Computing Technologies (2023)</li>
                <li>International Conference on Computational Intelligence (2023)</li>
                <li>And many more international conferences</li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* Collaboration Section */}
        <motion.section
          className="research-section collaboration-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <FaBook className="section-icon" />
            <h2>Open for Collaboration</h2>
          </motion.div>

          <motion.div className="collaboration-content" variants={itemVariants}>
            <p style={{ textAlign: 'justify' }}>
              I am always interested in collaborating on research projects, supervising graduate
              students, and partnering with industry on innovative AI and software engineering
              initiatives. If you have a research idea or project proposal, feel free to reach out!
            </p>
            <div className="collaboration-areas">
              <span>AI Research</span>
              <span>Machine Learning Applications</span>
              <span>Data Governance</span>
              <span>Software Architecture</span>
              <span>DevSecOps</span>
              <span>Cloud Computing</span>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResearchPage;
