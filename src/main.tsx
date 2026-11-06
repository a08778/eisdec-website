import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import palette from './assets/brand/palette.json';
import './styles/global.css';

// The unchanged approved palette is the sole source for brand color values.
const rootStyle = document.documentElement.style;
rootStyle.setProperty('--brand-background', palette.background);
palette.gradient.stops.forEach((stop, index) => {
  rootStyle.setProperty(`--brand-accent-${index + 1}`, stop.color);
});
rootStyle.setProperty(
  '--brand-gradient',
  `linear-gradient(to right, ${palette.gradient.stops
    .map((stop) => `${stop.color} ${stop.position * 100}%`)
    .join(', ')})`,
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
