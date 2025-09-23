// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;