// Header.jsx
import React from "react";
import logo from "../assets/cocretainc.jpg";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Bienvenido a la aplicación de Empleados</h1>
        </header>
    );
}

export default Header;