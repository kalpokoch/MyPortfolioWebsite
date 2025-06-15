
import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';
import { Skill } from '../types/portfolio';
import './Skills.css';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = {
    programming: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    'ai-ml': 'AI/ML Technologies',
    tools: 'Tools & Technologies',
    methodologies: 'Methodologies'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger skill bar animations
            setTimeout(() => {
              skills.forEach((skill, index) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => new Set([...prev, skill.name]));
                }, index * 100);
              });
            }, 500);
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

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" ref={sectionRef} className="skills">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in-up' : ''}`}>
          Skills & Technologies
        </h2>
        
        <div className="skills-grid">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div 
              key={category} 
              className={`skill-category ${isVisible ? 'slide-in-up' : ''}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="category-title">
                {skillCategories[category as keyof typeof skillCategories]}
              </h3>
              
              <div className="skills-list">
                {categorySkills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                          transition: 'width 1s ease-out',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={`skills-summary ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="summary-card">
            <h3>Technical Expertise Overview</h3>
            <div className="expertise-highlights">
              <div className="expertise-item">
                <div className="expertise-icon">🧠</div>
                <div className="expertise-text">
                  <h4>AI/ML Specialist</h4>
                  <p>Deep Learning, CNN, NLP with practical implementation experience</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">⚡</div>
                <div className="expertise-text">
                  <h4>Full-Stack Developer</h4>
                  <p>Modern web technologies with React, Laravel, and Python</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">🔧</div>
                <div className="expertise-text">
                  <h4>IoT Integration</h4>
                  <p>Hardware programming and sensor integration with Arduino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
