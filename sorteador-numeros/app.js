function sortear() {
    // Pega um elemento pelo ID e seleciona o valor dentro do mesmo.
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (i = 0;i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    
}

function obterNumeroAleatorio(min, max) {
    // Math.floor serve para arredondar o número para baixo - 4.3 = 4 / 4.7 = 4
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // (entre 1 e 0 * (10 - 5 + 1)) + 5 
}