const slides = document.querySelectorAll('.slide');

// обходим циклом каждый слайд и добавляем слушателя

//с помощью цикла for на каждой итерации создаем переменную slide которая является (по очереди) одним из элементов данного массива (slides) 
// ключевое слово of показывает откуда их брать -> 
// по клику на элемент очистить убрать класс .active с других элементов, а на тот который кликнули добавить данный класс (для анимации)

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    });
}

function clearActiveClasses() {
    // очищаем все активные классы где с помощью forEach пройдемся по каждому элементу массива slides (посредством создания slide внутри forEach который принимает в себя элемент массива) где обращаемся к класс-листу .classList и посредством метода remove() удаляем класс active
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}