function sortear() {
    // Pega um elemento pelo ID e seleciona o valor dentro do mesmo.
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (i = 0;i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        // Enquanto o número sorteado for igual a um que já esteja dento do array será selecionado outro numero aleátorio.
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        // Adiciona o valor de numero na lista.
        sorteados.push(numero);
    }

    // Selecionamos pelo ID a tag
    let resultado = document.getElementById('resultado');
    // Pode ser utilizado .textContent para mudar um texto simples dentro de uma tag.
    // Utilizamod o innerHTML para colocar um trecho de código HTML dentro da div.
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    // Chamar um metódo para alterar o botão reset
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
}

function obterNumeroAleatorio(min, max) {
    // Math.floor serve para arredondar o número para baixo - 4.3 = 4 / 4.7 = 4.
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // (entre 1 e 0 * (10 - 5 + 1)) + 5.
}

function reiniciar() {
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}