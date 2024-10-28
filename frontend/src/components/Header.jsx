
/* import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className="bg-light shadow-sm">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                        <Link to="/" className="text-decoration-none">
                            <img src="https://ibb.co/Lvr4nS5" alt="Logo Tienda Veterinaria" className="me-2" style={{ width: '50px', height: '50px' }} />
                            <span className="fs-4 text-dark fw-bold">Tienda Veterinaria RapiVet</span>
                        </Link>
                    </div>
                    <nav className="d-none d-md-flex gap-3">
                        <Link to="/" className="text-decoration-none text-dark">Inicio</Link>
                        <Link to="/dogs" className="text-decoration-none text-dark">Perros</Link>
                        <Link to="/cats" className="text-decoration-none text-dark">Gatos</Link>
                        <Link to="/others" className="text-decoration-none text-dark">Otros</Link>
                        <Link to="/promotions" className="text-decoration-none text-dark">Promociones</Link>
                        <Link to="/contact" className="text-decoration-none text-dark">Contacto</Link>
                    </nav>
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
                    <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
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

export default Header; */

// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const { cartItems, totalAmount } = useAppContext();

    return (
        <header className="bg-primary text-white p-3 mb-4">
            <div className="container d-flex justify-content-between align-items-center">
                <h1>Market Vet</h1>
                <nav>
                    <Link to="/" className="text-white mx-2">Home</Link>
                    <Link to="/dogs" className="text-white mx-2">Dogs</Link>
                    <Link to="/cats" className="text-white mx-2">Cats</Link>
                    <Link to="/others" className="text-white mx-2">Others</Link>
                    <Link to="/promotions" className="text-white mx-2">Promotions</Link>
                    <Link to="/contact" className="text-white mx-2">Contact</Link>
                    <Link to="/signup" className="text-white mx-2">Sign Up</Link>
                    <Link to="/login" className="text-white mx-2">Login</Link>
                </nav>
                <div>
                    <span className="mx-2">Items: {cartItems.length}</span>
                    <span className="mx-2">Total: ${totalAmount}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;










