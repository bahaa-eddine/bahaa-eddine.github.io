import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaCode, FaDatabase, FaRobot, FaCloud, FaUserGraduate } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: <FaChalkboardTeacher />,
    title: 'Trainer',
    description: 'Providing training on advanced topics like AI, DevOps, software development, and cloud computing. I offer personalized training programs for junior developers, students, and professionals.',
    color: 'cyan'
  },
  {
    icon: <FaCode />,
    title: 'Software Architecture & Development',
    description: 'Building robust software systems using modern architecture practices such as microservices and reactive programming. Expertise in Java, Spring Boot, and React for full-stack solutions.',
    color: 'orange'
  },
  {
    icon: <FaDatabase />,
    title: 'AI & Data Governance',
    description: 'Ensuring the security and governance of data in AI systems. I offer expertise in DataOps and DevSecOps, ensuring compliance with regulations while maintaining data integrity and security.',
    color: 'teal'
  },
  {
    icon: <FaRobot />,
    title: 'AI & Machine Learning',
    description: 'Leveraging AI and Machine Learning to deliver innovative solutions in data profiling, prediction models, and personalized systems. My research focuses on real-world applications of AI.',
    color: 'red'
  },
  {
    icon: <FaCloud />,
    title: 'DevSecOps & Cloud Solutions',
    description: 'Designing and deploying scalable cloud architectures and implementing DevOps best practices to automate and optimize workflows. Specialized in Docker, Kubernetes, and CI/CD pipelines.',
    color: 'indigo'
  },
  {
    icon: <FaUserGraduate />,
    title: 'Mentorship',
    description: 'Mentoring and guiding aspiring engineers and developers in their career paths, helping them navigate technical challenges, build strong foundations in AI, DevOps, and software architecture, and prepare for future leadership roles.',
    color: 'pink'
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Services</h2>
          <p className="section-intro">
            I provide a wide range of professional services focused on Artificial Intelligence, DevOps, Software
            Architecture, and Digital Transformation. With over 5 years of experience, my mission is to help businesses
            leverage cutting-edge technology to drive innovation and efficiency.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card service-${service.color}`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
