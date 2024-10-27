/* import React from 'react';
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

export default Header; */

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className="bg-light shadow-sm">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    {/* Logo y Título */}
                    <div className="d-flex align-items-center">
                        <Link to="/" className="text-decoration-none">
                            {/* <img src="https://ibb.co/Lvr4nS5" alt="Logo Tienda Veterinaria" className="me-2" style={{ width: '50px', height: '50px' }} /> */}
                            <img src="https://ibb.co/Lvr4nS5" alt="Logo Tienda Veterinaria" className="me-2" style={{ width: '50px', height: '50px' }} />


                            <span className="fs-4 text-dark fw-bold">Tienda Veterinaria RapiVet</span>
                        </Link>
                    </div>

                    {/* Navegación */}
                    <nav className="d-none d-md-flex gap-3">
                        <Link to="/" className="text-decoration-none text-dark">Inicio</Link>
                        <Link to="/dogs" className="text-decoration-none text-dark">Perros</Link>
                        <Link to="/cats" className="text-decoration-none text-dark">Gatos</Link>
                        <Link to="/others" className="text-decoration-none text-dark">Otros</Link>
                        <Link to="/promotions" className="text-decoration-none text-dark">Promociones</Link>
                        <Link to="/contact" className="text-decoration-none text-dark">Contacto</Link>
                    </nav>

                    {/* Acciones de Usuario */}
                    <div className="d-flex align-items-center gap-3">
                        <Link to="/login" className="btn btn-outline-primary">Iniciar Sesión</Link>
                        <Link to="/signup" className="btn btn-primary">Crear Cuenta</Link>
                        <Link to="/account" className="text-decoration-none text-dark">Mi Cuenta</Link>
                        <Link to="/cart" className="position-relative text-decoration-none text-dark">
                            <i className="bi bi-cart3 fs-5"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0
                                <span className="visually-hidden">items in cart</span>
                            </span>
                        </Link>
                    </div>

                    {/* Toggle del menú para móviles */}
                    <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Menú colapsable para móviles */}
                <div className="collapse d-md-none" id="mobileMenu">
                    <nav className="d-flex flex-column gap-2 py-2">
                        <Link to="/" className="text-decoration-none text-dark">Inicio</Link>
                        <Link to="/dogs" className="text-decoration-none text-dark">Perros</Link>
                        <Link to="/cats" className="text-decoration-none text-dark">Gatos</Link>
                        <Link to="/others" className="text-decoration-none text-dark">Otros</Link>
                        <Link to="/promotions" className="text-decoration-none text-dark">Promociones</Link>
                        <Link to="/contact" className="text-decoration-none text-dark">Contacto</Link>
                        <Link to="/login" className="btn btn-outline-primary">Iniciar Sesión</Link>
                        <Link to="/signup" className="btn btn-primary">Crear Cuenta</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;



