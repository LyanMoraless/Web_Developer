const Modelo = require("../framework/Modelo");

class User extends Modelo {
    static arquivo = 'users.json'

    name = '';
    email = '';
    password = '';
};

module.exports = User;