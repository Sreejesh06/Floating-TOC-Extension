import { useState, useEffect } from 'react';

export default function useHeadings() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    ).map((el, i) => {
      if (!el.id) el.id = `heading-${i}`;
      return {
        id: el.id,
        text: el.textContent,
        level: parseInt(el.tagName.substring(1)),
        element: el
      };
    });
    
    setHeadings(elements);
  }, []);

  return headings;
}