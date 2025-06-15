
import React, { useEffect, useRef, useState } from 'react';
import { professionalSummary } from '../data/portfolio';
import './About.css';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const highlights = [
    {
      icon: '🤖',
      title: 'AI/ML Expertise',
      description: 'Deep Learning, CNN, NLP with 75K+ dataset experience'
    },
    {
      icon: '🔌',
      title: 'IoT Systems',
      description: 'Arduino, sensors, and smart automation solutions'
    },
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'React, Laravel, Python with modern technologies'
    },
    {
      icon: '📊',
      title: 'Project Leadership',
      description: '3+ years coordinating complex technical projects'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
          About Me
        </h2>
        
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="summary-card">
              <h3 className="summary-title">Professional Summary</h3>
              <p className="summary-text">
                {professionalSummary}
              </p>
              
              <div className="key-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  <li>Developed facial recognition system with 75,000+ custom dataset</li>
                  <li>Created AI-powered chatbot for regulatory compliance</li>
                  <li>Built scalable web applications with modern frameworks</li>
                  <li>Implemented IoT solutions for smart home automation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={`about-highlights ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="highlight-card"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h4 className="highlight-title">{highlight.title}</h4>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`experience-metrics ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="metric">
            <div className="metric-number">3+</div>
            <div className="metric-label">Years Experience</div>
          </div>
          <div className="metric">
            <div className="metric-number">10+</div>
            <div className="metric-label">Technologies</div>
          </div>
          <div className="metric">
            <div className="metric-number">4+</div>
            <div className="metric-label">Major Projects</div>
          </div>
          <div className="metric">
            <div className="metric-number">2</div>
            <div className="metric-label">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
