const express = require('express');
const path = require('path');
const authRoutes = require('./authRoutes'); // Importa authRoutes
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Usa as rotas de autenticação
app.use(authRoutes);

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
