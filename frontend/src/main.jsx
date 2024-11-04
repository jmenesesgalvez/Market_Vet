/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root')); */

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot
import App from './App'; // Asegúrate de que la ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root')); // Cambia a createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
