import React, { useState } from 'react';

function Calculator() {
  const [age1, setAge1] = useState(0);
  const [age2, setAge2] = useState(0);
  const [result, setResult] = useState(0);

  const handleSum = () => {
    setResult(age1 + age2);
  };

  return (
    <div className="calculator">
      <h2>Calculadora de Edades</h2>
      <input 
        type="number" 
        value={age1} 
        onChange={(e) => setAge1(Number(e.target.value))}
        placeholder="Edad 1"
      />
      <input 
        type="number" 
        value={age2} 
        onChange={(e) => setAge2(Number(e.target.value))}
        placeholder="Edad 2"
      />
      <button onClick={handleSum}>Sumar Edades</button>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default Calculator;
