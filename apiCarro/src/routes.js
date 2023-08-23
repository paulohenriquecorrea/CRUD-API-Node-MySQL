const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:codigo', CarroController.alterar);
router.delete('/carro/:codigo', CarroController.deletar);

const path = require('path');
router.get('/', (req, res) => {
  const carroPath = path.join(__dirname, '/views/index.html');
  res.sendFile(carroPath);
});

module.exports = router;
