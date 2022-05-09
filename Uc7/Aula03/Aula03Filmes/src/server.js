const express = require("express");
const bodyParser = require('body-parser');
const port = 3000;

const { appendFile } = require("fs");
const filmes = require('./rotas/filmesRotas')

const app = new express();
app.use(bodyParser.json());

app.use('/filmes', filmes)

app.listen(port, () => {
    console.log('O servidor foi inicializado na porta 3000');
})