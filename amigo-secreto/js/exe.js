// Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamada novaLista. Imprima novaLista no console.

let minhaLista = [1,2,3];
let minhaLista2 = [4,5,6];

let novaLista = minhaLista.concat(minhaLista2);

console.log(novaLista);


// Remova o último elemento de novaLista. Imprima novaLista após a remoção.

// Associa a variável com o elemento removido da lista.
let elementoRemovido = novaLista.pop();

// Remove o ultimo elemento da Array.
novaLista.pop();

console.log(elementoRemovido);
console.log(novaLista);


// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);


// Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.

let listaRepetida = [1,2,3,1,2,3];

function removerDuplicatas(array) {
    return [...new Set(array)];
}

listaRepetida = removerDuplicatas(listaRepetida);
console.log("Remover duplicatas:", listaRepetida);

