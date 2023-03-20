import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/**
*
*Отображает функциональный компонент App в корневом div.
*
*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
