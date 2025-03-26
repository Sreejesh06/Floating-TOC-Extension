import { useState, useEffect } from 'react';

const useHeadings = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Try to find main content area
    const mainContentSelectors = [
      'main', 
      'article', 
      '.main-content', 
      '#content', 
      '.content', 
      '.post-content',
      '.article-content'
    ];
    
    let mainContent = document.body; // Default to body if no better container found
    
    for (const selector of mainContentSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        mainContent = element;
        break;
      }
    }
    
    // Get headings from the main content
    const elements = Array.from(
      mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6')
    ).filter(el => {
      // Filter out headings that are likely not part of the main content
      const isVisible = el.offsetWidth > 0 && el.offsetHeight > 0;
      const notInNav = !el.closest('nav, header, footer, aside, .sidebar');
      return isVisible && notInNav;
    }).map((el, i) => {
      if (!el.id) el.id = `heading-${i}`;
      return {
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.substring(1)),
        element: el
      };
    });
    
    setHeadings(elements);
  }, []);

  return headings;
};

export default useHeadings;