// src/components/Footer.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light text-center py-3 mt-auto">
            <div className="container">
                <p className="mb-1">Ubicación: Av. Siempreviva 123, Springfield</p>
                <p className="mb-1">Teléfono: +56 9 1234 5678</p>
                <p>Email: contacto@rapivet.com</p>
            </div>
        </footer>
    );
};

export default Footer;
