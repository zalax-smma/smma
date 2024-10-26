const express = require('express');
const path = require('path'); // Módulo para lidar com caminhos de arquivos
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Rota para a página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/login.html'));
});

// Rota padrão
app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
