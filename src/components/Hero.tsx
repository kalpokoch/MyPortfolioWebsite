
import React, { useEffect, useState } from 'react';
import { contactInfo } from '../data/portfolio';
import './Hero.css';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'AI/ML Engineer',
    'IoT Systems Developer',
    'Web Developer',
    'Python Expert'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, titles]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting fade-in-up">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1 className="hero-name slide-in-left">
              {contactInfo.name}
            </h1>
            <div className="hero-title slide-in-right">
              <span className="typing-text">{displayedText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-summary fade-in-up">
              Passionate about building intelligent systems and scalable web solutions.
              Specialized in AI/ML, IoT integration, and modern web technologies.
            </p>
            <div className="hero-buttons fade-in-up">
              <button onClick={scrollToContact} className="cta-button primary">
                Get In Touch
              </button>
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-line">
                <span className="code-keyword">class</span>
                <span className="code-class">Developer</span>
                <span className="code-punctuation">:</span>
              </div>
              <div className="code-line">
                <span className="code-indent">    </span>
                <span className="code-keyword">def</span>
                <span className="code-function">__init__</span>
                <span className="code-punctuation">(</span>
                <span className="code-parameter">self</span>
                <span className="code-punctuation">):</span>
              </div>
              <div className="code-line">
                <span className="code-indent">        </span>
                <span className="code-parameter">self</span>
                <span className="code-punctuation">.</span>
                <span className="code-property">name</span>
                <span className="code-operator"> = </span>
                <span className="code-string">"Kalpojyoti"</span>
              </div>
              <div className="code-line">
                <span className="code-indent">        </span>
                <span className="code-parameter">self</span>
                <span className="code-punctuation">.</span>
                <span className="code-property">skills</span>
                <span className="code-operator"> = </span>
                <span className="code-punctuation">[</span>
              </div>
              <div className="code-line">
                <span className="code-indent">            </span>
                <span className="code-string">"AI/ML"</span>
                <span className="code-punctuation">,</span>
                <span className="code-string">"IoT"</span>
                <span className="code-punctuation">,</span>
                <span className="code-string">"Web Dev"</span>
              </div>
              <div className="code-line">
                <span className="code-indent">        </span>
                <span className="code-punctuation">]</span>
              </div>
            </div>
            <div className="neural-network">
              <div className="node node-1"></div>
              <div className="node node-2"></div>
              <div className="node node-3"></div>
              <div className="node node-4"></div>
              <div className="connection conn-1"></div>
              <div className="connection conn-2"></div>
              <div className="connection conn-3"></div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item fade-in-up">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item fade-in-up">
            <div className="stat-number">75K+</div>
            <div className="stat-label">Dataset Images</div>
          </div>
          <div className="stat-item fade-in-up">
            <div className="stat-number">4+</div>
            <div className="stat-label">Major Projects</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
