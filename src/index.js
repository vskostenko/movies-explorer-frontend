import React from 'react';
import ReactDOM from 'react-dom/client';
import {Helmet} from "react-helmet";
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <html lang="ru" />
    </Helmet>
    <App />
  </React.StrictMode>
);

reportWebVitals();
