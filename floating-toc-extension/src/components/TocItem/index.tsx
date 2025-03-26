import React from 'react';
import './styles.css';

interface TocItemProps {
  id: string;
  text: string;
  level: number;
  isActive: boolean;
  onClick: (id: string) => void;
}

const TocItem: React.FC<TocItemProps> = ({ id, text, level, isActive, onClick }) => {
  const handleClick = () => onClick(id);

  return (
    <li 
      className={`toc-item ${isActive ? 'active' : ''}`}
      style={{ paddingLeft: `${level * 12}px` }}
    >
      <a 
        href={`#${id}`}
        className="toc-link"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        {text}
      </a>
    </li>
  );
};

export default TocItem;