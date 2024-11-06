// backend/server.js

const express = require('express');
const cors = require('cors'); // Para permitir la comunicación entre diferentes orígenes
const app = express();
const PORT = 3000;

// Middleware para procesar JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Rutas de ejemplo
app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde el servidor!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
