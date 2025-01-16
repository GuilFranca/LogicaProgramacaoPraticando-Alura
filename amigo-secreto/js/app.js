let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    // push é utilizado para adicionar elementos em uma array.
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        // Sem pessoas na lista.
        lista.textContent = amigo.value;
    } else {
        // Com pessoas na lista.
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // Limpa o conteúdo anterior para evitar duplicações

    for (let i = 0; i < amigos.length; i++) {
        if (i === amigos.length - 1) {
            // Último amigo aponta para o primeiro
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            // Amigo aponta para o próximo
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));

        // troca os elementos de posição usando destructuring
        [lista[indice], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice]];
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML= '';
}