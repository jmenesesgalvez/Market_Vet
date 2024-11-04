const express = require('express');
const router = express.Router();
const { saveContact } = require('../controllers/contactController');

// Ruta para guardar el contacto (solo acepta POST)
router.post('/contact', saveContact);

module.exports = router;
