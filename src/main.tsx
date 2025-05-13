
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add favicon
const link = document.createElement('link');
link.rel = 'icon';
link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230EA5E9"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>';
link.type = 'image/svg+xml';
document.head.appendChild(link);

// Add meta tags
const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Fintaxplanner - Trusted Chartered Accountants for Startups, SMEs & Professionals across India';
document.head.appendChild(meta);

createRoot(document.getElementById("root")!).render(<App />);
