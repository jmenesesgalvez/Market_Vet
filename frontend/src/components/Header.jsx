import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Tienda Veterinaria</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/dogs">Perros</Link>
                <Link to="/cats">Gatos</Link>
                <Link to="/others">Otros</Link>
                <Link to="/promotions">Promociones</Link>
                <Link to="/contact">Contacto</Link>
                <Link to="/signup">Crear Cuenta</Link>
                <Link to="/login">Iniciar Sesión</Link>
            </nav>
        </header>
    );
};

export default Header;
