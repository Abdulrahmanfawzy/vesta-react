import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from './App';
import '../styles/globals.css';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container #root not found');
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: 1,
      refetchOnWindowFocus: true,
    },
  },
});

createRoot(container).render(
    <StrictMode>
            <QueryClientProvider client={queryClient}>

            <App />
                </QueryClientProvider >

    </StrictMode>,
);
