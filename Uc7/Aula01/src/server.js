//Npm install -> express -> fs -> path -> body-parser
//Node scr/server.js

const express = require('express');
const fs = require('fs');
const { join } = require('path');
const bodyParser = require('body-parser');

const filleName = join(__dirname, '..', 'json', 'usuarios.json')
const getUsers = () => {
    const dados = fs.existsSync(filleName) ?
        fs.readFileSync(filleName) :
        '[]';

        return JSON.parse(dados);
}

const salvarUsers = (users) => fs.writeFileSync(filleName, JSON.stringify(users), null, '\t');

const app = new express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send(getUsers());
});

app.post('/', (req, res) => {
    var users = getUsers();
    users.push(req.body);
    salvarUsers(users);

    res.status(200).send('OK');
})

app.listen(3000, function(){
    console.log('Servidor iniciado na porta 3000');
});