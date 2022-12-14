// Функция состоит из имени функции, имен параметров и тела функции
// function name(param1, paramN) {
//     let body = 'тело функции'
//     return body
// }


// function average(x, y) {
//     return (x + y) / 2;
// }

// // let result = average(8, 9);
// // console.log(result)// 8,5
// // result = average('8', '9');
// // console.log(result)// 44,5 - возвращает в виде числа.  Когда передаются строки, оператор + в теле функции конкатенирует их, а перед делением на 2 приводит к числу.
// //=======
// //Предложение return возвращает управление немедленно, так что оставшаяся часть функции не выполняется. Для примера рассмотрим функцию indexOf, которая вычисляет индекс значения в массиве:
// function indexOf(arr, value) {
//     for (let i in arr) {
//         if (arr[i] === value) return i;
//     }
//     return -1;
// }// как только искомое значение найдено, функция возвращает его индекс и завершается.
// console.log(indexOf([1, 2, 3, 4, 5, 6, 7], 5))// 4 -> вернула его индекс '4', но так как цикл in возвращает строку, то вернул в виде строки 
// //Если функция ни чего не возвращает или возвращает ничего то она по умолчанию возвращает undefined;


// //========
// // Функции являются значениями, которые можно сохранять в переменных, передавая в качестве аргументов или возвращая из функции в качестве значения.
// // Можно сохранить функцию в переменной, 
// let f = average;
// //А затем вызвать ее 
// let result = f(8, 9);
// console.log(result);//8,5 //при вычислении выражения будет обнаружено что f -функция и это функция будет вызвана с аргументами 6 и 7.

// //затем можно поместить в переменную f другую функцию 
// f = Math.max;
// console.log(f(8, 9))// 9 

// // Пример передачи функции в качестве аргумента. Если arr - массив, то вызов метода arr.map(someFunction) применяет переданную функцию ко всем элементам и возвыращает массив результатов ( исходный массив при этом не изменяется). Например, в результате вызова
// result = [0, 1, 4, 16, 25].map(Math.sqrt);
// console.log(result);// [0, 1, 2, 4, 5]
// // Метод map иногда называют функцией высшего порядка: это функция, которая получаетдругую функцию в качестве параметра.

// //======== Функциональные литералы
// // пусть требуется умножить все элементы массива на 10.
// function multiplyBy10(x) { return x * 10 };
// // вызываем функцию следующим образом
// result = [0, 1, 4, 6].map(multiplyBy10);
// console.log(result);
// // но что бы не объявлять функцию ради одного вызова лучше воспользоваться функциональным литералом:
// result = [0, 1, 4, 6].map(function (x) { return x * 10 });
// console.log(result);


//=========== Стрелочные функции
//Переменные-параметры располагаются слева от функции, а возвращаемое значение справа. Есил параметр всего один, то заключать его в скобки необязательно.
// если у функции нет параметра, то стоит ставить пустые скобки.

// const dieToss = () => Math.trunc(Math.random() * 9) + 10; //trunc возвращает целую часть числа путём удаления всех дробных знаков.
// //отметим что dieToss - функция, а не число. При каждом вызове dieToss() мы получаем случайное цело число от 1 до 9(не вкулючая 9) + 10;
// console.log(dieToss());


// Функциональная обработка массива.
// вместо обхода массива в цикле for of или for in, можно воспользваться методом forEach, передав ему функцию, которая получает на входе элемент и его индекс
// [5, 4, 3, 2, 1, 0].forEach((element, index) => { console.log(`element:${element} index: ${index}`) });



// ========= Замыкания
// Функция setTimeout принимает два аргумента: функцию, которую нужно будет выполнить позже, когда истечет тайм-аут, и продолжительность тайм-аута в миллисекундах. Например, следующий вызов напечатае "Hi Rick" через 9 секунд
// setTimeout(() => console.log('Hi Rick'), 9000);
// //сделаем это более гибко

// const sayLater = (text, when) => {
//     let task = () => console.log(text);
//     return setTimeout(task, when);
// }
// sayLater("Hello world", 6000)
// sayLater("Yea", 7000)

//Код стрелочной функции выполняется спустя длительное время после возврата из функции sayLater. Но почему перменная text к этлому моменту не уничтожилась ? И как так получилось, что она сначала была равна "Hello world", а потом 'Yea' ?
// Что бы понять, в чем тут дело, нуэно переосмыслить на понимание функции. У функции есть три составляющие:
//1. Блок кода;
//2. Параметры;
//3. Свободные переменные, т.е переменные которыевстречаются в коде, но не объявлены как параметры или локальные переменны.
// Функции со свободными переменными называются замыканиями.
// В нашем примере text - свободная переменная стрелочной функции.
// В функции task мы захватили ссылку на переменную text которая уже существует на момент создания функции task.Поэтому ее значение доступно в момент, когда функция будет вызвана.

// Основная идея замыкания проста: свободная переменная внутри функции значит тоже самое что она означает снаружи.




// ======= Крепкие объекты или паттерны замыкания
// Пусть требуется реализровать объекты, представляющие бансковские счета. У каждого счета есть остаток. Денежные средства можно класть на счет и снимать со счета.
//Мы хотим, чтобы состояние объекта было закрытым, т.е чтобы его можно было модифицировать только с помощью представленных нами методов. Вот набросок фабричной функции
// const createAccount = () => {
//     ...
//     return{
//         deposit: amount => {...},
//         withdraw: amount => {...},
//         getBalance: () => ...
//     }
// }

// теперь мы может сконструировать столько счетов, сколько пожелаем:
// const harryAccount = createAccount();
// const rickAccount = createAccount();
// rickAccount.deposit(500) 

// Заметим, чтро объект счета содержит только методы, но не данные. Ведь если бы мы даставили остаток в объект счета, то его мог бы модифицировать кто угодно, поскольку в JS нет закрытых свйоств.
//А где же хранить данные ? Все просто - в виде локальных переменных фабричной функции:
// const createAccount = () => {
//     let balance = 0;
//     return {
//         ...
//     }
// }

//Метод Object.freeze(obj) замораживает объект: он предотвращает добавление новых свойств и удаление старых свойств а так же их изменения. Объект становится неизменным.




// ========= строгий режим 
//что бы включить строгий режим поставьте первой отличной от комментария строкой в своем файле команду. Он должен быть написан в первой строке документа, иначе не активируется. Так же use strict можно писать для отдельной функции, но обычно используют для всего документа.
// 'use strict'



// =============== Проверка типов аргументов 
// В JS не нужно задавать типы аргументов функции. Поэтому вызывающая стороная пожет передавать аргументы то одного, то другого типа, а функция будет обрабатывать его в своответствии с фактическим типом.


// Передача большего или меньшего числа аргументов
// Если в функцию передавать большее число аргументов, чем она предполагает, то лишние аргументы будут проигнорированны
//А если передавать меньшее число аргументов, то недостоющие аргументы будут приравненны к undefined

// let average = (x, y) => { return (x + y) / 2 };
// let result = average(3, 9, 6);
// console.log(result);// 6
// result = average(3,);
// console.log(result);// NaN  т.е 3 + undefined
// // Если хотим получить осмысленный результат то модифицируем функцию

// average = (x, y) => y === undefined ? x / 2 : (x + y) / 2;
// result = average(12);
// console.log(result);//6
// result = average(12, 8);
// console.log(result);// 10




// ====== Аргументы по умолчанию
//еще один способ заставить функцию average работать с одним аргументом 
// let average = (x, y = x) => (x + y) / 2;
// console.log(average(10));// 10
// console.log(average(10, 4)); //7
// console.log(average());//NaN

// //значений по умолчанию может быть несколько
// average = (x = 0, y = x) => (x + y) / 2;
// console.log(average());// 0 





// Прочие параметры и операторы расширения
// Что бы обработать прочие параметры в функции воспользуемсчя лексеймой ... 
// let average = (first = 0, ...following) => {
//     let sum = first;
//     console.log(following)//[ 2, 3, 4 ]
//     for (const value of following) {
//         sum += value;
//     }
//     return sum / (1 + following.length)
// }
// //При вызове этой функции параметр following является массивом, который содержит все фактические аргументы, которые не использовались для инициализации предыдущих формальных параметров. 
// console.log(average(1, 2, 3, 4))// 2.5

// //Многие функции и методы принимают переменное число аргументов. Например, функция Math.max возвращает наибольший из переданных аргументов
// let result = Math.max(6, 7, 534, 65, 7, 5);
// console.log(result);//534

// // А что если значение уже является массив? 
// let numbers = [4, 5, 6, 3, 2, 5, 55, 3, 96];
// result = Math.max(numbers);
// console.log(result);//NaN - это не работает. Метод Math.max получает переменную с одним элементом - массивом.
// //Вместо этого воспользуйтесь оператором "расширения" - поставьте лексесму ... перед массивовым аргументом 
// result = Math.max(...numbers);
// console.log(...numbers)//4 5 6 3 2 5 55 3 96
// console.log(result)// 96

// оператор расширения линеаризует элементы, как если бы они передавались по отдельности

//Оператор расширения преобразует массив ( любой итерируемый объект) в последовательность значений. 
// Объявление "прочих" ( которая происходит в аргументе функции) приводит к тому, что последовательность зачений помещается в массив

// Оператор расширения можно использовать, даже если у вызываемой функции нет "прочих" параметров. 
// let summ = (x, y) => {
//     return x + y;
// }
// let callSumm = summ(...numbers);
// console.log(callSumm)// 9 т.е 4 + 5 а остальные элементы массива будут проигнорированны.

// // Оператор расширения можно использовать также в инициализаторе массива:
// let moreNumbers = [1, 2, 3, ...numbers];
// console.log(moreNumbers);// [1,  2, 3, 4,  5,6,  3, 2, 5, 55,3, 96]

// // Поскольку строки допускают итерирование, оператор расширения можно применить и к строке
// let harry = 'harry';
// let arrHarry = [...harry];
// console.log(arrHarry);// [ 'h', 'a', 'r', 'r', 'y' ]




//====== Поднятие (hoisting)

// function doStuff() { // начало блока
//     console.log(someVariable)// при попытке доступа к someVariable возбуждается ReferenceError
//     let someVariable // область видимости начинается здесь
//     // ... // можно обратиться к someVariable, значение равно undefined
//     someVariable = 42
//     // ... // можно обратиться к someVariable, значение равно 42
// } // конец блока, здесь область видимости заканчивается
// doStuff()// Cannot access 'someVariable' before initialization

// Однако все не так просто. К локальным переменным можно обращаться в функциях, объявления которых предшествует объявлению переменной:
// function doStuff() {
//     function lockalWork() { //function lockalWork() знает о местопопложении переменной someVariable, потому что та поднята в начало тела функции doStuff, хотя переменная объявлена после lockalWork
//         console.log(someVariable)// обращаться к переменной можно
//     }
//     let someVariable = 108;
//     lockalWork() // печатается 108
// }
// doStuff();// 108

//В JS любое объявление поднимается наверх его области видимости. То есть еще до объявления известно, что переменная или функция существует, и для ее значения резервируется место. 
//Внутри вложенной функции можно ссылаться на поднятые переменные или функции.

// Лучше не использовать ключевое слово var. Оно обевляет переменные, областью видимости которых является вся функция, а не только объмлющий блок. 

// function someFunction(arr) {
//     // i, element уже находятся в области видимости, но равны undefined
//     for (var i = 0; i < arr.length; i++) {
//         var element = arr[i]
//     }
//     // i, element все еще в области видимости
//     console.log(i);
// }
// someFunction([1, 2, 3, 4]);//4

// Поскольку функции поднимаются, мы можем вызывать функции еще до того, как они были объявлены.




//======= Для возбуждения исключения служит предложение throw
// значение исключения может иметь любой тип, но традиционно используется объект ошибки. Функция Error порождает такой объект, содержащий строку с описанием причины ошибки
// throw value
// let reason = `Элемент ${elem} не найден`
// throw Error(reason)
//После выполнения предложения throw функция немедленно завершается. Не возвращает никаого значения, даже undefined.
// Выполнение продолжается не с места вызова функции, а в ближайшей ветви catch или finally.


// Перехват исключени.
//для перехвата исключений предназначено предложение try.
//Если вы хотите проанализировать значение исключения, то добавьте переменную в ветвь catch

// try {
//     // сделать то-то
//     ...
// } catсh (e) {
//     // обработать исклчения
// }