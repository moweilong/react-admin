import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import 'virtual:uno.css';

import '@/styles/global.css';
import '@/styles/entry.css';
import '@/styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
