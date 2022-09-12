
const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.column');
// const columnsDataId = document.querySelectorAll('[data-id]');
// console.log(columnsDataId);

// Добавляем эффект на карточку которую будем перемещать

// console.log(cards);

// cards.forEach(card => {
//     // card.addEventListener('ondragstart', drag);
//     // card.addEventListener('dragstart', dragstart);// dragstart событие - начало перетаскивания (по нажатию)
//     // card.addEventListener('dragend', dragend);// dragend событие - когда закончили перетаскивание  (по расжатию)

// }) 

// function dragstart(e) {
//     e.currentTarget.classList.add('dragging');
//     console.log(e.currentTarget.classList);
// }

// function dragend(e) {
//     e.currentTarget.className = 'card';
// }//  вышенаписанный код работает с ошибками

// задача 1.  сделать так, что бы добавление классов работало корректно [ строка.18] function dragstart - работает не корректно.  Решение: находится на [.72]  Задача 2 : сделать что бы  [.23] function dragend работала корректно. Решение: находится на [.78]

// Добавляем визуальный эффект на колонку в которую будем перемещать карточку

columns.forEach(column => {
    column.addEventListener('dragover', allowDrop); // dragover вызывается  когда перетаскиваемый элемент находится над column 
    column.addEventListener('dragenter', dragEnter);//dragenter когда заходим на терриорию данного column
    column.addEventListener('dragleave', dragLeave);// dragleave - покинули данный column 
    column.addEventListener('drop', drop);// drop когда отпустили
});


function dragEnter(e) {
    e.currentTarget.classList.add('drop');
};

function dragLeave(e) {
    e.currentTarget.classList.remove('drop');
};

function drop(event) {

    event.preventDefault(); // отменяем поведение по умолчанию

    columns.forEach(column => column.classList.remove('drop')); //при отпускании элемента убираем класс drop c колонки
    console.log(event.currentTarget);
    console.log(document.querySelector(`[data-id="${event.dataTransfer.getData('text/plain')}"]`));
    document.querySelector(`[data-id="${event.dataTransfer.getData('text/plain')}"]`).remove(); // удаляем из первоначальной колонки элемент который перетащили
    event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html'); // добавляем элемент который перетащили
};


function allowDrop(event) {
    event.preventDefault();
};


function drag(event) {
    //dataTransfer - это то место, где реализуется перетаскивание. Оно содержит часть данных, отправляемых при выполнении этого действия. 
    // объект dataTransfer устанавливается в событии dragstart, а считывается в событии drop ( при опускании).
    //при вызове функции e.dataTransfer.setData(format, data) содержанию объекта назначается MIME-тип, а полезные данные передаются в качестве аргументов.
    //MIME-тип - это медиа тип (так же известный как Multipurpose Internet Mail Extensions или MIME тип является стандартом, который описывает природу и формат документа, файла или набора байтов.  тип/подтип
    //outerHTML - это атрибут DOM-интерфейса elem получает HTML-фрагмент, описывающий элемент, включая его потомков.
    event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
    event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
    event.currentTarget.classList.add('dragging'); // действуя на прямую через index.html исправил баг связанный с тем, что по событию ondragstart на изначальный элемент не добавлялся данный класс если мы дейстовали не по парядки и/или после перемещения элемента 
};

function dragend(event) {
    // document.querySelector(`[data-id="${e.dataTransfer.getData('text/plain')}"]`).classList.remove('dragging');
    // console.log(document.querySelector(`[data-id="${e.dataTransfer.getData('text/plain')}"]`));
    event.currentTarget.className = 'card'; // обнуляем остальные классы посредством присваивания элементу одного класса card с помощью метода className
};