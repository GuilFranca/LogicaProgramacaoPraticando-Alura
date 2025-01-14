function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (qtd <= 0) {
        alert('Quantidade invalida');
        document.getElementById('qtd').value = '';
        return;
    }

    if (tipo == 'pista') {
        comprarPista(qtd);
    } else if (tipo == 'superior') {
        comprarSuperior(qtd);
    } else if (tipo == 'inferior') {
        comprarInferior(qtd);
    }

    document.getElementById('qtd').value = '';
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo Pista');
    } else {
        alert('Compra concluída');
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo Superior');
    } else {
        alert('Compra concluída');
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo Inferior');
    } else {
        alert('Compra concluída');
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
}