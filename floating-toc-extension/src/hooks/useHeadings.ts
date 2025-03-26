import { useState, useEffect } from 'react';
import { Heading } from '../types';

const useHeadings = (showLevels: number[]) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const selector = showLevels.map(level => `h${level}`).join(', ');
    const headingElements = Array.from(document.querySelectorAll(selector))
      .filter((el): el is HTMLElement => {
        const hasContent = el.textContent?.trim() !== '';
        return hasContent;
      })
      .map((el, index) => {
        const id = el.id || `heading-${index}`;
        if (!el.id) el.id = id;
        
        return {
          id,
          text: el.textContent || '',
          level: parseInt(el.tagName.substring(1)),
          element: el
        };
      });

    setHeadings(headingElements);
  }, [showLevels]);

  return headings;
};

export default useHeadings;