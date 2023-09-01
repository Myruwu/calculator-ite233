import React, { useState } from 'react';
import '../../App.css';
import Button from '../Button/Button';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    if (/^[+-]?\d+(\.\d*)?$/.test(e.target.value) || e.target.value === '') {
      setNum1(e.target.value);
    }
  };

  const handleNum2Change = (e) => {
    if (/^[+-]?\d+(\.\d*)?$/.test(e.target.value) || e.target.value === '') {
      setNum2(e.target.value);
    }
  };

  const handleAdd = () => {
    setOperator('+');
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setOperator('-');
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setOperator('*');
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    setOperator('/');
    if (parseFloat(num2) !== 0) {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult('Cannot divide by zero');
    }
  };

  return (
    <div className="calculator-container">
      <div className="input-container">
        <input type="text" value={num1} onChange={handleNum1Change} />
        <span className="operator">{operator}</span>
        <input type="text" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="button-container">
        <Button onClick={handleAdd} text="Add" />
        <Button onClick={handleSubtract} text="Subtract" />
        <Button onClick={handleMultiply} text="Multiply" />
        <Button onClick={handleDivide} text="Divide" />
      </div>
      <h1 className="result">{result}</h1>
    </div>
  );
}

export default Calculator;