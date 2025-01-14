// Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.

let num1 = '1';
let num2 = '2';

function somar(num1,num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    alert(`${num1} + ${num2} = ${num1 + num2}`);
}

// Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

function calculadora() {
    let numero1 = parseInt(prompt('Digite o primeiro número.'));
    let numero2 = parseFloat(prompt('Digite o segundo número.'));
    let operador = prompt('Digite qual operação será efetuada (+, -, *, /)');

    if (operador == '+') {
        alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
    } else if (operador == '-') {
        alert(`${numero1} - ${numero2} = ${numero1 - numero2}`);
    } else if (operador == '*') {
        alert(`${numero1} * ${numero2} = ${numero1 * numero2}`);
    } else if (operador == '/') {
        alert(`${numero1} / ${numero2} = ${numero1 / numero2}`);
    }

}

// calculadora();

function paridade() {
    let numero = prompt('Digite um número');
    
    if (numero % 2 == 0){
        alert(`${numero} é um número par.`);
    } else {
        alert(`${numero} é um número impar.`);
    }
}

// paridade();

function converterTemperatura() {
    let valor = parseInt(prompt('Digite o valor da temperatura.'));
    let medida = prompt('Digite C para Celsius e F para Fahrenheit');

    if (medida == 'C') {
        celsius = ((valor - 32) / 1.8).toFixed(2);
        alert(`${celsius}C`);
    } else {
        fare = (1.8 * valor + 32).toFixed(2);
        alert(`${fare}F`);
    }
}
converterTemperatura();