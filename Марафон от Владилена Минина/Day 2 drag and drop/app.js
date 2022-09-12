//drag n drop построен на событии
const item = document.querySelector('.item');
// Для того, чтобы браузер понимал что мы может элемент перетаскивать добавляем атрибут draggable в html элементу что бы разрешить перетаскивать HTML элемент.

const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);// dragstart событие - начало перетаскивания (по нажатию)
item.addEventListener('dragend', dragend);// dragend событие - когда закончили перетаскивание  (по расжатию)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover); // dragover вызывается  когда перетаскиваемый элемент находится над placeholder 
    placeholder.addEventListener('dragenter', dragenter); //dragenter когда заходим на терриорию данного placeholder
    placeholder.addEventListener('dragleave', dragleave); // dragleave - покинули данный dragleave 
    placeholder.addEventListener('drop', dragdrop); // drop когда отпустили
};

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add
        ('hide'), 0); //с помощью setTimeout реализуем скорытие элемента по которому кликнули посредством добавляния класса hide. Элементу в первоначальной позиции сразу (0 мс) по "захвату" ( dragstart) присваивается .hide, но c элементом который мы "зажали" этого не происходит 
};

function dragend(event) {
    //     event.target.classList.remove('hold', 'hide'); оптимизируем в  -> 
    event.target.className = 'item'; //где по событию "dragend" присваиваем нашему элементу только одинн класс (что автоматически очищает остальные)
};

function dragover(event) {
    event.preventDefault();
}; // по умолчанию dragover отменяет поведение которое позволяет нам перетаскивать элементы посредством метода preventDefault() который отменяет свойства по умолчанию.

function dragenter(event) {
    event.target.classList.add('hovered');
    console.log("drag enter");
};

function dragleave(event) {
    event.target.classList.remove('hovered');
};

function dragdrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
};




// function dragstart(event) {
//     console.log('dragstart', this); //event.target - это и есть элемент HTML страницы .item. При срабатывании события dragstart который мы ему добавили у нас в "руках" по сути сам элемент. 

//     //('dragstart', this) такой вариант тоже уместен, но лучше не стоит т.к может привести к непредвиденным ошибкам.
// }