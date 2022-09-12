// Форматирование чисел для форматирования целого числа в системе счисления с основанием от 2 до 36 используется метод stoString
let n = 3735928559;
console.log(n.toString(8))// 33653337357
console.log(n.toString(2))// 11011110101011011011111011101111
n = 1600;
console.log(n.toString(16))// 640
n = 3735928559;
console.log(n.toString(16))//deadbeef

Math.max(x, y) // большее из x и y
Math.min(...values) // наименьший элемент массива values