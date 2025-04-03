import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeList from './components/EmployeeList';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="envoltura">
      <Header />
      <h1>Lista de Empleados</h1>
      <EmployeeList />
      <h2>Calculadora</h2>
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
