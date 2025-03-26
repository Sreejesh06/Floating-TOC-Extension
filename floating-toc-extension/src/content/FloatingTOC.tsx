import React, { useState, useEffect } from 'react';

const FloatingTOC = () => {
  const [headings, setHeadings] = useState<Array<{
    id: string;
    text: string;
    level: number;
  }>>([]);

  // Extract headings when component mounts
  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    );
    
    const newHeadings = headingElements.map((el, index) => ({
      id: el.id || `heading-${index}`,
      text: el.textContent || '',
      level: parseInt(el.tagName[1])
    }));
    
    setHeadings(newHeadings);
  }, []);

  return (
    <div className="floating-toc">
      <h3>Table of Contents</h3>
      <ul>
        {headings.map(heading => (
          <li key={heading.id} style={{ marginLeft: `${(heading.level - 1) * 10}px`}}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingTOC;