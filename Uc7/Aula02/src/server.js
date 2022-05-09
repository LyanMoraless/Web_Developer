const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const usuarios = require('./rotas/usuarioRotas')
const estilos = require('./rotas/estilos')

const app = new express();
app.use(bodyParser.json());

//Req = requisição e Res = resposta

app.get('/', (res, req) => {
    res.send('Segunda API em Node Express');
});

app.use('/usuarios', usuarios)
app.use('/estilosBandas', estilos)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

