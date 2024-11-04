import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const AppContext = createContext();

// Hook personalizado para usar el contexto
export const useAppContext = () => {
    return useContext(AppContext);
};

// Proveedor del contexto
export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // Elementos en el carrito
    const [totalAmount, setTotalAmount] = useState(0); // Monto total
    const [products, setProducts] = useState([]); // Estado para los productos

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        setTotalAmount((prevTotal) => prevTotal + product.price);
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        const updatedItems = cartItems.filter(item => item.id !== productId);
        const removedItem = cartItems.find(item => item.id === productId);
        
        setCartItems(updatedItems);
        setTotalAmount((prevTotal) => prevTotal - (removedItem ? removedItem.price : 0));
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        setCartItems([]);
        setTotalAmount(0);
    };

    return (
        <AppContext.Provider value={{ cartItems, totalAmount, addToCart, removeFromCart, clearCart, products, setProducts }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;





