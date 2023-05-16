import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CalculationState from './contextAPI/CalculationState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculationState>
      <App />
    </CalculationState>
  </React.StrictMode>
);

