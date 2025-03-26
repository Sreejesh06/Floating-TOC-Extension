import React from 'react';
import { createRoot } from 'react-dom/client';
import Toc from './components/Toc';
import './styles.css';

// Wait for page to fully load
window.addEventListener('load', () => {
  // Create container for React app
  const container = document.createElement('div');
  container.id = 'toc-root';
  document.body.appendChild(container);

  // Render the TOC component
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Toc />
    </React.StrictMode>
  );

  // Add click handler to toggle TOC with keyboard shortcut
  document.addEventListener('keydown', (e) => {
    // Alt+T to toggle
    if (e.altKey && e.key === 't') {
      toggleToc();
    }
  });
});

// Function to toggle TOC visibility
function toggleToc() {
  const tocRoot = document.getElementById('toc-root');
  if (tocRoot) {
    tocRoot.style.display = tocRoot.style.display === 'none' ? 'block' : 'none';
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleTOC') {
    toggleToc();
  }
});