import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (email === '' || password === '') {
      setError(true);
      return;
    }

    setError(false);
    const loggedInUser = { email };
    setUser(loggedInUser); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: '22rem' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger">Por favor, completa todos los campos.</p>}
            <button type="submit" className="btn btn-primary w-100">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

