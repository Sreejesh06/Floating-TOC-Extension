import React from 'react';
import './styles.css';

const TocItem = ({ id, text, level, isActive, onClick }) => {
  return (
    <li 
      className={`toc-item ${isActive ? 'active' : ''}`}
      data-level={level}
    >
      <a 
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
        title={text}
      >
        {text}
      </a>
    </li>
  );
};

export default TocItem;