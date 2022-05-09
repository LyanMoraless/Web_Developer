const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');
const Modelo = require('./framework/Modelo');
const user = require('./rotas/user');

const PORT = 3000;

Modelo.dir = join(__dirname, '..', 'Dados');

const app = express();
app.use(bodyParser.json());

app.use('/users', user);

app.get('/', (req, res) => {
    res.send('API Receitas v0.1');
})


app.listen(PORT, () => {
    console.log(`O servidor iniciou na porta ${PORT}`);
})

