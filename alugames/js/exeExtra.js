// 1 - Crie um programa que verifica se uma palavra ou frase é um palíndromo.
// 2 - Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

let texto = prompt('Digite um palíndromo');
// split serve para transformar a string inserida em uma array.
// reverse serve para inverter a lista.
// join serve para transformar a lista em string novamente.
let textoInvertido = texto.split('').reverse().join('');

if (texto == textoInvertido) {
    alert(`${texto} realmente é um palíndromo`);
} else {
    alert(`${texto} não é um palíndromo.`);
}

function ordenar(numero1, numero2, numero3) {

    let numeros = [numero1, numero2, numero3];
    // Ordena a Array em ordem crescente.
    numeros.sort();

    console.log(numeros);
}

ordenar(3,2,1);

function ordenarDecrescente(numero1, numero2, numero3) {

    let numeros = [numero1, numero2, numero3];
    // Ordena a Array em ordem decrescente.
    numeros.sort((x,y) => y - x);

    console.log(numeros);
}

ordenarDecrescente(3,2,1);