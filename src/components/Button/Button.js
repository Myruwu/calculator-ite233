import React from 'react';
import '../../App.css';

function Button({ onClick, text }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;