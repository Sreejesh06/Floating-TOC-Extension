import { createRoot } from 'react-dom/client';
import Toc from './components/Toc';
import './styles.css';

// Create container
const container = document.createElement('div');
container.id = 'toc-root';
document.body.appendChild(container);

// Render React app
const root = createRoot(container);
root.render(<Toc />);