
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    let v = document.querySelector('.div-1').textContent;
    document.querySelector('.out-1').textContent = v;
    return v;
}
document.querySelector('.div-1').onclick = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
    document.querySelector('.out-2').textContent = event.altKey;
}
document.querySelector('.div-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
const div3 = document.querySelector('.div-3');
const out3 = document.querySelector('.out-3');
function t3() {
    w3 = w3 + 5;
    div3.style.width = w3 + 'px';
    out3.textContent = div3.style.width;
}
div3.onclick = t3;

// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
const div4 = document.querySelector('.div-4');
const out4 = document.querySelector('.out-4');
function t4() {
    out4.textContent = div4.textContent;
}
div4.ondblclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
const div5 = document.querySelector('.div-5');
function t5() {
    let classes = div5.classList;
    if (classes.contains('active')) {
        classes.remove('active');
    }
    else {
        classes.add('active');
    }
}
div5.ondblclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
const div6 = document.querySelector('.div-6');
function t6() {
    let ul = document.querySelector('.ul-6');
    if (ul.hidden == false) {
        ul.hidden = true;
    }
    else {
        ul.hidden = false;
    }
}
div6.ondblclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
const div7 = document.querySelector('.div-7');
function t7() {
    let classes = div7.classList;
    if (classes.contains('active')) {
        classes.remove('active');
    }
    else {
        classes.add('active');
    }
}
div7.oncontextmenu = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
function t8() {
    if (this.checked) {
        document.oncontextmenu = function (event) {
            event.preventDefault();
            return false;
        }
    } else {
        document.oncontextmenu = null;
    }

}
document.querySelector('.ch-8').onchange = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
const div_9 = document.querySelector('.div-9');
const div_9_img = document.querySelector('.div-9 img');
function t9() {
    div_9_img.src = 'img/2.png';
}
div_9.oncontextmenu = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
const div_10 = document.querySelector('.div-10');
const div_10_img = document.querySelector('.div-10 img');
function t10() {
    div_10_img.src = 'img/2.png';
}
div_10.onmouseenter = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
const div_11 = document.querySelector('.div-11');
const div_11_img = document.querySelector('.div-11 img');
function t11() {
    div_11_img.src = 'img/2.png';
}
function t11_1() {
    div_11_img.src = 'img/1.png';
}
div_11.onmouseenter = t11;
div_11.onmouseleave = t11_1;
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
const div_12 = document.querySelector('.div-12');
div_12.onmousedown = () => {
    div_12.classList.add('active');
}
// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

const div_13 = document.querySelector('.div-13');
div_13.onmousedown = () => {
    div_13.classList.add('active');
}

div_13.onmouseup = () => {
    div_13.classList.remove('active');
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    const div_14 = document.querySelector('.div-14');
    div_14.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
const div_15 = document.querySelector('.div-15');
let counter = 1;
function t15() {
    div_15.textContent = counter++;
}
// ваше событие здесь!!!
div_15.onmousemove = t15;

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

const div_16 = document.querySelector('.div-16');
let w = 75;
function t16() {
    div_16.style.width = w + 'px';
    w++;
}
// ваше событие здесь!!!
div_16.onmousemove = t16;
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
const btn_17_on = document.querySelector('.b-17_on');
const btn_17_off = document.querySelector('.b-17_off');
function t17On() {
    div_16.onmousemove = t16;
}
function t17Off() {
    div_16.onmousemove = null;
}
btn_17_on.onclick = t17On;
btn_17_off.onclick = t17Off;
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
const div_18 = document.querySelector('.div-18');
function t18() {

    div_18.textContent = div_18.offsetWidth + 'px';
}
// ваше событие здесь!!!
div_18.onmouseenter = t18;
// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
const div_19 = document.querySelector('.div-19');
function t19() {
    console.log(div_19.classList);
    div_19.textContent = div_19.classList;
}
// ваше событие здесь!!!
div_19.onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let v = 10;
const prog20 = document.querySelector('progress');
function t20() {
    prog20.value = v;
    v++;
}
prog20.onmousemove = t20;
// ваше событие здесь!!!