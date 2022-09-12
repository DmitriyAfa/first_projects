//1
// console.log([1, 2, 3, 4, 5, 6, 7].indexOf(5))//4 
// console.log({ 1: 10, 2: 20 }.indexOf(2))// TypeError: {(intermediate value)(intermediate value)}.indexOf is not a function

//3 
// function values(f, low, high) {
//     let arr = [f * low, f * (low + 1), f * high];
//     return arr;
// }
// console.log(values(2, 6, 10))//[12, 14, 20]

//4
// метод arr.sort([compareFunction]). compareFunction - необязательный параметр. Указывает функцию, определяющую порядок сортировки. Если опущен, массив сортируется в соответствии со значениями кодовых символов Unicode, полученных потем преобразования каждого элемента в строку. 
// На месте сортирует элементы массива и возвращает отсортированный массив. 

// let fruit = ['арбузы', 'бананы', 'Вишня'];

// console.log(fruit.sort())// [ 'Вишня', 'арбузы', 'бананы' ]

// let things = ['слово', 'Слово', '1 Слово', '2 Слова'];
// console.log(things.sort()) //[ '1 Слово', '2 Слова', 'Слово', 'слово' ]
// // В Unicode, числа находятся перед буквами в верхнем регистре,
// // а те, в свою очередь, перед буквами в нижнем регистре.



//7 
// function average(...arguments) {
//     let count = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         count += arguments[i];
//     }
//     return count / arguments.length;
// }//среднее значение произвольной последовательности чисел

// console.log(average(1, 2, 3, 4, 5)); //3

//10 
// for (var i = 0; i < 10; i++) {// i уже равно 10 и никак не изменяется
//     setTimeout(() => console.log(i), 1000 * i)// вместо i подаставляется значение 10
// }

//var плохо сочетается с замыканиями 
