/* import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({});

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
}; */

// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const AppContext = createContext();

// Hook personalizado para usar el contexto
export const useAppContext = () => {
    return useContext(AppContext);
};

// Proveedor del contexto
export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        setTotalAmount((prevTotal) => prevTotal + product.price);
    };

    return (
        <AppContext.Provider value={{ cartItems, totalAmount, addToCart }}>
            {children}
        </AppContext.Provider>
    );
};



