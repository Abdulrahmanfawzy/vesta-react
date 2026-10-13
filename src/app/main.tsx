import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import '../styles/globals.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container #root not found');
}
const queryClient = new QueryClient();

createRoot(container).render(
    <StrictMode>
      
        <QueryClientProvider client={queryClient}>

        <App />
        </QueryClientProvider>
        
       
    </StrictMode>,
);
