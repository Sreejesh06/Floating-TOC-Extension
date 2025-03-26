import { useState, useEffect } from 'react';

const useHeadings = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Find main content area using common content selectors
    const contentSelectors = [
      'article', 
      'main',
      '.article-content',
      '.post-content',
      '.main-content',
      '.document-content',
      '.entry-content',
      '.content',
      '#content',
      '.blog-post',
      '.documentation'
    ];
    
    // Find the first matching content container
    let contentContainer = null;
    
    for (const selector of contentSelectors) {
      const element = document.querySelector(selector);
      if (element && element.offsetHeight > 200) { // Make sure it's substantial content
        contentContainer = element;
        break;
      }
    }
    
    // Fallback to <body> if no content container found
    if (!contentContainer) {
      contentContainer = document.body;
    }
    
    // Get all headings from the identified main content area
    const elements = Array.from(
      contentContainer.querySelectorAll('h1, h2, h3, h4, h5, h6')
    ).filter(el => {
      // Only include visible headings not in navigation areas
      const isVisible = el.offsetHeight > 0;
      const hasContent = el.textContent.trim().length > 0;
      const notInNavigationArea = !el.closest('nav, header, footer, aside, .sidebar, .menu, .navigation');
      return isVisible && hasContent && notInNavigationArea;
    });
    
    // Generate unique IDs for headings that don't have them
    const headingsData = elements.map((el, index) => {
      // Use existing ID or create one
      if (!el.id) {
        el.id = `toc-heading-${index}`;
      }
      
      // Clean up text (remove any nested button/span text that might be irrelevant)
      let headingText = el.textContent.trim();
      
      return {
        id: el.id,
        text: headingText,
        level: parseInt(el.tagName.substring(1)), // Get heading level (1-6)
        element: el
      };
    });
    
    setHeadings(headingsData);
  }, []);

  return headings;
};

export default useHeadings;