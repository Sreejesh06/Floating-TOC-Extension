import React from 'react';
import './styles.css';

const TocItem = ({ id, text, level, isActive, onClick }) => {
  return (
    <li 
      className={`toc-item ${isActive ? 'active' : ''}`}
      style={{ paddingLeft: `${level * 12}px` }}
    >
      <a 
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
      >
        {text}
      </a>
    </li>
  );
};

export default TocItem;