// O objetivo aparente da atividade é de alternar entre alugar e devolver os jogos disponiveis na Alu Games.
// Neste caso quando alugado o jogo e o botão devem mudar.

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);

    let divImg = game.querySelector('.dashboard__item__img');

    let button = game.querySelector('.dashboard__item__button');

    let isRented = divImg.classList.contains('dashboard__item__img--rented');

    if (isRented) {
        // Se o jogo está alugado.
        divImg.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar';
    } else {
        // Se o jogo está disponível.
        divImg.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }

}