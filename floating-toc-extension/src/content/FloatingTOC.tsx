import React, { useState } from 'react';
import TocList from '../components/TocList';
import TocButton from '../components/TocButton';
import useHeadings from '../hooks/useHeadings';
import useScroll from '../hooks/useScroll';
import './styles.css';

const FloatingTOC: React.FC = () => {
  const [config] = useState({
    showLevels: [1, 2, 3],
    position: 'right'
  });
  
  const headings = useHeadings(config.showLevels);
  const currentId = useScroll(headings.map(h => h.id));
  const [isVisible, setIsVisible] = useState(false);

  const handleItemClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`floating-toc ${config.position} ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <TocButton onClick={() => setIsVisible(!isVisible)} />
      
      {isVisible && (
        <div className="toc-content">
          <h3 className="toc-title">Table of Contents</h3>
          <TocList 
            headings={headings}
            currentId={currentId}
            onItemClick={handleItemClick}
          />
        </div>
      )}
    </div>
  );
};

export default FloatingTOC;