import React from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">ITE 233 Calculator P2 Activity</h1>
      <Calculator />
    </div>
  );
}

export default App;