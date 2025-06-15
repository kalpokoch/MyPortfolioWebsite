
import React, { useEffect, useRef, useState } from 'react';
import { education, certifications } from '../data/portfolio';
import './Education.css';

const Education: React.FC = () => {
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
    <section id="education" ref={sectionRef} className="education">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
          Education & Certifications
        </h2>
        
        <div className="education-content">
          <div className={`education-section ${isVisible ? 'slide-in-left' : ''}`}>
            <h3 className="subsection-title">Education</h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="education-item"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="education-icon">
                    {edu.type === 'bachelor' ? '🎓' : '📚'}
                  </div>
                  <div className="education-details">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <div className="education-institution">{edu.institution}</div>
                    <div className="education-meta">
                      <span className="education-duration">{edu.duration}</span>
                      <span className="education-grade">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`certifications-section ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="certification-item"
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <div className="certification-icon">🏆</div>
                  <div className="certification-details">
                    <h4 className="certification-title">{cert.title}</h4>
                    <div className="certification-issuer">{cert.issuer}</div>
                    <div className="certification-meta">
                      <span className="certification-date">{cert.date}</span>
                      {cert.grade && <span className="certification-grade">{cert.grade}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
