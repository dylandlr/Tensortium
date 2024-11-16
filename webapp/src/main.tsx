import React from 'react';
import ReactDOM from 'react-dom/client';
import AttentionExplorer from './attention-interactive';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 p-8">
      <AttentionExplorer />
    </div>
  </React.StrictMode>
);
