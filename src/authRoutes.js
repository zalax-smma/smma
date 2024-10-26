const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Usuário de exemplo para teste
const USERS = [
  { username: 'admin', password: await bcrypt.hash('senha123', 10) } // Altere a senha conforme necessário
];

// Rota de login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Encontra o usuário mockado
  const user = USERS.find(u => u.username === username);

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET || 'seu_segredo_jwt', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Rota de logout (apenas uma resposta de sucesso para front-end)
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout realizado com sucesso' });
});

module.exports = router;
