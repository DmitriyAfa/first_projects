const board = document.querySelector('#board');
const colors = ['#8B0000', '#006400', '#DB7093', '#000080', '#800000', 'limegreen', '#FFD700'];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) { // имеем определенно кол-во (SQUARES_NUMBER) в каждой итерации создаем див (500 шт) каждому диву присваиваем класс square -> каждому диву добавляем слушателей  mouseover и mouseleave при наступлении которых выполняется определенная функцтя
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () =>
        setColor(square));

    square.addEventListener('mouseleave', () =>
        removeColor(square));


    board.append(square); // к классу square нужно в CSS добавить 
};

function setColor(element) {
    const color = getRandomColor(); // получаем цвет с помощью функции
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px 1px ${color}, 0 0 100px ${color}`; //светящийся эффект 0 0 100px ${color}
};

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
};

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length); // рандомизиуруем выбор цвета = Округляем(рандомное число * на массив.длинна (тем самым задаем рамки в которых будет происходить рандомизация, в нашем случае 5 т.к 5 элементов в массиве)). Произвели вычисления, а теперь нужно вернуть массив с цветом присвоив ему полученный рандомный номер ->
    return colors[index];
}