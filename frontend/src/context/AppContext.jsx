import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0); 
    const [products, setProducts] = useState([]); 

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        setTotalAmount((prevTotal) => prevTotal + product.price);
    };

    const removeFromCart = (productId) => {
        const updatedItems = cartItems.filter(item => item.id !== productId);
        const removedItem = cartItems.find(item => item.id === productId);
        
        setCartItems(updatedItems);
        setTotalAmount((prevTotal) => prevTotal - (removedItem ? removedItem.price : 0));
    };

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





