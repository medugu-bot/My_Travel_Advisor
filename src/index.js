import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Use createRoot to initiate rendering
const root = createRoot(document.getElementById('root'));

// Render your app using root
root.render(<App />);
