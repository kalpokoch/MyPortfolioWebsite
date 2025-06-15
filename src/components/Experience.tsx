
import React, { useEffect, useRef, useState } from 'react';
import { experiences } from '../data/portfolio';
import './Experience.css';

const Experience: React.FC = () => {
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

  return (
    <section id="experience" ref={sectionRef} className="experience">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
          Experience
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${isVisible ? 'slide-in-left' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.3}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-position">{exp.position}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-meta">
                    <span className="experience-duration">{exp.duration}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                
                <div className="experience-content">
                  <p className="experience-description">{exp.description}</p>
                  <ul className="experience-responsibilities">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
