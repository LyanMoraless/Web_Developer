const express = require('express');
const User = require('../modelos/User');

const router = express.Router();

/**
 * Listar todas as receitas
 */
router.get('/', (req, res) => {
    res.send(User.listar());
});

/**
 * Inserir uma receita
 */
router.post('/', (req, res) => {
    const user = new User().assign(req.body);
    user.salvar();
    res.send(user);
});

/**
 * Consultar uma receita
 */
router.get('/:id', (req, res) => {
    res.send(User.consultar(req.params.id));

});

/**
 * Alterar uma User
 */
router.put('/:id', (req, res) => {
    const user = User.consultar(req.params.id).assign(req.body);
    user.salvar();
    res.send(user);
});

/**
 * Remover uma User
 */
router.delete('/:id', (req, res) => {
    User.consultar(req.params.id).excluir();
    res.send('OK');
});

module.exports = router;
