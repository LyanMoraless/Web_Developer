var games = [];

function adicionar(e) {
    e.preventDefault();

    let game = document.getElementById('game').value;

    if (game != '') {
        games.push(game);
    }

    document.getElementById('game').value = '';
    document.getElementById('game').focus();

    mostrarGames();

}

function mostrarGames() {
    var lista = document.getElementById('games');

    lista.innerHTML = '';
    games.forEach(function (item, i) {
        lista.innerHTML += `<li>${item} <button type="button" onclick="remover(${i})" class="btn-remover">X</button></li>`;
    })
}

function remover(pos) {
    games.splice(pos, 1);

    mostrarGames();
}