function capturarValores() {
    let nome = document.getElementById('campoNome').value;
    let idade = document.getElementById('campoIdade').value;

    let campoAmostra = document.getElementById('mostraNome');
    campoAmostra.textContent = `Seu nome é: ${nome} e você tem ${idade} anos.`
}


let numero1 = 1;
let numero2 = 2;

console.log(`${numero1 + numero2}`)

let separador = 'Guilherme;Raquel';
// Utiliza .split para separar no ponto onde há ; e seleciona qual parte da array será usada.
let parte1 = separador.split(';')[0];
let parte2 = separador.split(';')[1];

console.log(parte1);
console.log(parte2);

let numeros = '1,2';
let numeros1 = numeros.split(',')[0];
let numeros2 = numeros.split(',')[1];

console.log(numeros1);
console.log(numeros2);