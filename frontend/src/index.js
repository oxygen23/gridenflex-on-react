import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './sass/style.sass'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode> 
);
