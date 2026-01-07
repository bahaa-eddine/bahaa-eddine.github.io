import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        'service_3g9q9z4',
        'template_gzcmrgq',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'b.elbaghazaoui@usms.ac.ma',
          subject: formData.subject,
          message: formData.message,
          name: formData.name,
          email: formData.email
        },
        'OTaL0MA-ZZC6yCXZi'
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ loading: false, success: false, error: true });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Address</h3>
                <p>Beni Mellal, Morocco</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h3>Call Me</h3>
                <p>+212 6 68 70 22 02</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email Me</h3>
                <p>b.elbaghazaoui@usms.ac.ma</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {status.loading && <div className="loading">Sending...</div>}
            {status.error && (
              <div className="error-message">
                An error has occurred. Please send message directly!
              </div>
            )}
            {status.success && (
              <div className="success-message">
                Your message has been sent. Thank you!
              </div>
            )}

            <button type="submit" disabled={status.loading}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
