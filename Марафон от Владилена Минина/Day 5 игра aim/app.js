// id используем для js а классы для css
const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

//ДЗ Шаг 1: создаем массиву с различными цветами
const colors = ['#8B0000', '#006400', '#DB7093', '#000080', '#800000', 'limegreen', '#FFD700'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault(); //отменили повоедение по умолчанию 
    screens[0].classList.add('up');
});

timeList.addEventListener('click', event => {
    //пользуемся делегированием событий
    if (event.target.classList.contains   //если у элемента  есть класс time-btn значит это кнопка и тогда
        ('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up'); //изменяем экран
        startGame();
    };
});

board.addEventListener('click', event => { //удаляем эелемент по клику, а затем добавляем новый
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    };
});

//DEBUG
// startGame();

function startGame() {
    setInterval(decreaseTime, 1000); //будет выполнять какую нибудь другую функцию через (каждый промежуток времени)
    createRandomCircle();
    setTime(time); // подставляем время которое выбрали
};

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else { // если время (в нашем случае) больше 0, то выполнять следующий функционал
        let current = --time; //уменьшаем время
        if (current < 10) {
            current = `0${current}`;
        };
        setTime(current); // переопределяем время 
    };
};

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
};

function finishGame() {
    timeEl.parentNode.classList.add('hide'); // по завершению игры скрываем родитель элемента timeEl посредством добавления класса со скрывающей стилизацией
    board.innerHTML = `<h1>Cчет<span class='primary'>:${score}</span></h1>`;
};

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60); // рандомный размер 
    const { width, height } = board.getBoundingClientRect(); // getBoundingClientRect получаем координаты и помещаем их в const { width, height }

    //ДЗ шаг 3: присваиваем кружку рандомный цвет
    const color = getRandomColor();// получаем рандомный цвет с помощью функции
    circle.style.background = color;
    circle.style.boxShadow = `0 0 5px 1px ${color}, 0 0 100px ${color}`;



    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);


    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
};


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

// ДЗ шаг 2: получаем рандомный цветв в функции посредством получения рандомного индекса массива с цветами в рамках длиныв массива
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};

// Bonus -функция которая в автоматическом режиме убивает кружочки

function winTheGame() {
    // const circle = document.querySelector('.circle');

    // // circle.click(); //данная функция уберет только один кружок, для клика по всем появляющимся кружкам стоит воспользоваться ИНТЕРВАЛАМИ

    function kill() {
        const circle = document.querySelector('.circle');

        if (circle) { //если circle есть вызываем
            circle.click();
        }
    };
    setInterval(kill, 1);
};
