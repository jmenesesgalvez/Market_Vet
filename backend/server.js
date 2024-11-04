const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Servir la carpeta "uploads" para que las imágenes sean accesibles públicamente
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importar las rutas de productos y de contacto
const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Configurar las rutas
app.use('/api/products', productRoutes);
app.use('/api', contactRoutes); // Ruta para manejar el formulario de contacto

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});



