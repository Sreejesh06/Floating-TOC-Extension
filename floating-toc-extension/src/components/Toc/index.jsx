import React, { useState, useEffect } from 'react';
import TocItem from '../TocItem';
import './styles.css';
import useHeadings from '../../hooks/useHeadings';

export default function Toc() {
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
      { rootMargin: '0px 0px -50% 0px' }
    );

    headings.forEach(h => observer.observe(h.element));
    return () => observer.disconnect();
  }, [headings]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
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
            level={h.level - 1} // Start indentation from h1
            isActive={h.id === activeId}
            onClick={scrollTo}
          />
        ))}
      </ul>
    </div>
  );
}