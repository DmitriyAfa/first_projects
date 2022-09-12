// // В любой переменной можно сохранять значения любого типа
// console.log(typeof (null))



// //можно изменять значеиня переменных
// let counter = 0;
// console.log(counter);
// counter = 'zero';
// console.log(counter);

// // Если переменная явно не инициализирована ей присваивается значение undefined
// let x;
// console.log(x);

// // если значение не планируется изменять следует объявить через const

// // в одном предложении можно объявить несколько переменных:
// const FREEZING = 0, BOILING = 100;
// console.log(FREEZING, BOILING)

// //преобразуем строку в число 
// const notQuitePi = parseFloat('3.14')// число 3.14
// const eventLessPi = parseInt('3.14') // число 3
// console.log(notQuitePi);
// console.log(eventLessPi);

// // метод toString преобразует число в строку 
// const notQuitePiString = notQuitePi.toString() // строка '3.14'
// const evenLessPiString = (3).toString() // строка '3'
// console.log(notQuitePiString);
// console.log(evenLessPiString);

// console.log(9 * '6');
// console.log('9' * 6);

// значение null обозначает намеренное отсутствие значения.

// шаблонным литералом называются обратные кавычки `` которые могут содержать выражение
// let destination = 'world';
// //выражения внутри ${} вычисляются, при необходимости преобразуются в строку и подставляются в шаблон
// let greeting = `Hello, ${destination.toUpperCase()}!`
// console.log(greeting);

// // шаблонные литералы могут быть вложенными 
// let firstname = 'Rick';
// let lastname = 'Sunchez';
// greeting = `Hello, ${firstname.length > 0 ? `${firstname[0]}.` : ''}${lastname}`// Hello, R.Sunchez
// console.log(greeting);


// // ========== объекты
// const harry = { name: 'Harry Potter', age: 35 } //создали объект с именем и значением

// let harrysAge = harry.age;
// console.log(harrysAge); //35
// // можно модифицировать объекты и добавить новые 
// harry.age = 45;
// harry.traiding = 9000000000;
// console.log(harry.traiding)// 9000000000


//что бы проверить ялвяется ли объект массивом нужно вызвать метод Array.isArray(obj)
// let arr = [1, , 3, 4, 5,];
// console.log(Array.isArray(arr));//true
// console.log(Array.isArray(harry));//false
// console.log(arr[0])//1
// console.log(arr[1])//undefined
// console.log(arr.length)//5

// JSON (JavaScript Object Notation) - текстовой формат обмена данными, основанные на JavaScript. Но при этом формат независим от JS и может использоваться в любом языке программирования. Чаще всего его можнло встретить в API
//API (Application programming interface) - это контракт, который предоставляет программа. То есть, ко мне можно обратиться ьак и так, я обезуюсь делать то и это



// деструктуризация - это удобный синтаксис для выборки элементов массива или значений объекта. 
//Разобъем массив
// let pair = [1, 2];
// let first = pair[0];
// let second = pair[1];
// console.log(first, second);// 1, 2

// //деструктуризация
// let [first1, second1] = pair;
// console.log(first, second);//1, 2

let [first, [second, third]] = [1, [2, 3]] //1 2 3
console.log(first, second, third)