import React from "react";

const employees = [
  { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
  { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
  { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
  { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
];

function EmployeeList() {
  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <div key={index} className="employee-card">
          <p><strong>Nombre:</strong> {employee.name} {employee.lastName}</p>
          <p><strong>Hobbies:</strong> {employee.hobbies.join(", ")}</p>
          <p><strong>Edad:</strong> {employee.age}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
