import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GistProvider from "./context/GistContext";

ReactDOM.render(
  <React.StrictMode>
    <GistProvider>
      <App />
    </GistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

