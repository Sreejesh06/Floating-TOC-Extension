import React, { useState, useEffect } from 'react';
import TocItem from '../TocItem'; // Fixed import path
import useHeadings from '../../hooks/useHeadings'; // Fixed import path
import './styles.css';

const Toc = () => {
  const headings = useHeadings();
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -50% 0px', threshold: 0.1 }
    );

    // Only observe elements that exist
    headings.forEach(h => {
      if (h.element) {
        observer.observe(h.element);
      }
    });
    
    return () => observer.disconnect();
  }, [headings]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="toc-container">
      <h3 className="toc-title">Table of Contents</h3>
      <ul className="toc-list">
        {headings.map(h => (
          <TocItem
            key={h.id}
            id={h.id}
            text={h.text}
            level={h.level}
            isActive={h.id === activeId}
            onClick={scrollTo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Toc;