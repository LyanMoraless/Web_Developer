const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const bolos = require('./rotas/boloRotas');

const app = new express();
app.use(bodyParser.json());

app.get('/', (res, req) => {
    res.send('API em Node Express');
});

app.use('/bolos', bolos);

app.listen(port, () => {
    console.log(`O servidor foi inicializado na porta ${port}`);
});