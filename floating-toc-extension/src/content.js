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

  // Make TOC draggable
  makeDraggable(container);

  // Add click handler to toggle TOC with keyboard shortcut
  document.addEventListener('keydown', (e) => {
    // Alt+T to toggle
    if (e.altKey && e.key === 't') {
      toggleToc();
    }
  });
});

// Function to make an element draggable
function makeDraggable(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  // Create drag handle
  const dragHandle = document.createElement('div');
  dragHandle.className = 'toc-drag-handle';
  element.appendChild(dragHandle);
  
  dragHandle.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    // Get mouse position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // Calculate new position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Set element's new position
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
    element.style.right = 'auto';
  }

  function closeDragElement() {
    // Stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

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