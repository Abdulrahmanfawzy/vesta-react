import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import '../styles/globals.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container #root not found');
}

createRoot(container).render(
    <StrictMode>
        <BrowserRouter>
        
        <App />
        </BrowserRouter>
    </StrictMode>,
);
