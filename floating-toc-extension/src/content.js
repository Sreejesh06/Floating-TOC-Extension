import { createRoot } from 'react-dom/client';
import Toc from './components/Toc';
import './styles.css';

let tocVisible = true;
const container = document.createElement('div');
container.id = 'toc-root';
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Toc />);

// Add message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleTOC") {
    tocVisible = !tocVisible;
    container.style.display = tocVisible ? 'block' : 'none';
  }
});