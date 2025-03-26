import React from 'react';
import TocItem from '../TocItem';
import './styles.css';
import { Heading } from '../../types';

interface TocListProps {
  headings: Heading[];
  currentId: string | null;
  onItemClick: (id: string) => void;
}

const TocList: React.FC<TocListProps> = ({ headings, currentId, onItemClick }) => {
  return (
    <ul className="toc-list">
      {headings.map((heading) => (
        <TocItem
          key={heading.id}
          id={heading.id}
          text={heading.text}
          level={heading.level}
          isActive={heading.id === currentId}
          onClick={onItemClick}
        />
      ))}
    </ul>
  );
};

export default TocList;