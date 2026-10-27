
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'public');

// Servir archivos HTML, CSS y otros archivos estáticos
app.use(express.static(publicPath));

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Ruta de prueba del backend
app.get('/api/saludo', (req, res) => {
  res.json({
    mensaje: 'Hola desde mi app AEHR'
  });
});

// Iniciar servidor HTTP
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
