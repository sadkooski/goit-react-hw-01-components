import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const getReactRootElement = document.getElementById('root');

const root = ReactDOM.createRoot(getReactRootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
