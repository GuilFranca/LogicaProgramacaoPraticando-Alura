let totalGeral = 0;
limpar();

function adicionar() {
// Recuperar valores nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;

    // .split é uma função que separa uma string, neste caso está separando antes e após o "-" e utilizamos o [0] para selecionar qual posição da array que queremos.
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    let quantidade = document.getElementById('quantidade').value;
    // Como a variável foi associada à um input, é necessário utilizar .value no lugar de .textContent.

// Calcular o preço, o nosso subtotal.
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

// Adicionar no carrinho.
    // utilizamos carrinho.innerHTML = carrinho.innerHTML + para adicionar uma nova section de produto, ao invés de escrever por cima dela.
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`



// Atualiza o valor total da compra.
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;

// Limpar a quantidade depois de adicionar.
    document.getElementById('quantidade').value = 1;
}

function limpar() {
// Limpar todos os campos do carrinho.
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('quantidade').value = 1;
    document.getElementById('valor-total').textContent = 'R$0';
}