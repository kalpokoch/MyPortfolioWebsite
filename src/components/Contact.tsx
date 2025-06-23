
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPinned} from 'lucide-react';
import { contactInfo } from '../data/portfolio';
import './Contact.css';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
          Get In Touch
        </h2>
        
        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'slide-in-left' : ''}`}>
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, collaborations, 
              or just having a chat about AI/ML, IoT, and web development.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon text-white"> <Mail size={28}/></div>
                <div className="contact-text">
                  <label>Email</label>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon text-white"><Phone size={28}/></div>
                <div className="contact-text">
                  <label>Phone</label>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon text-white"><MapPinned size={28}/></div>
                <div className="contact-text">
                  <label>Location</label>
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">💻</span>
                GitHub
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className={`contact-form-section ${isVisible ? 'slide-in-right' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              
              {showSuccess && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
