const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Verificação');
});

router.post('/', (req, res) => {
    res.send('Enviar');
});

router.delete('/:id', (req, res) => {
    res.send('Deletar');
});

router.put('/:id', (req, res) => {
    res.send('Colocar');
});

router.post('/:id', (req, res) => {
    res.send('Postar');
});

module.exports = router;
