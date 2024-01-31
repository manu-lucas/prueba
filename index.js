const express = require('express');
const app = express();
const port = 3000;

// Configura el middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta principal que sirve tu archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor Express ejecutándose en http://localhost:${port}`);
});