import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext.jsx';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Others from './pages/Others';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <AppProvider>
            <UserProvider> {/* Envuelve la aplicación con UserProvider */}
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dogs" element={<Dogs />} />
                        <Route path="/cats" element={<Cats />} />
                        <Route path="/others" element={<Others />} />
                        <Route path="/promotions" element={<Promotions />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </UserProvider>
        </AppProvider>
    );
};

export default App;





