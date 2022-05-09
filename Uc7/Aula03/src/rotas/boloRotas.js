const express = require('express');
const database = require('../database/bolos');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(database.all());
});

router.post('/', (req, res) => {
    var bolos = database.all();
    bolos.push(req.body);
    database.salvar(bolos);

    res.status(200).send('OKAY');
});

router.get('/:id', (req, res) => {
    res.send('Consultar');
});

router.put('/:id', (req, res) => {
    res.send('Alterar');
});

router.delete('/:id', (req, res) => {
    res.send('Deletar');
});

module.exports = router;