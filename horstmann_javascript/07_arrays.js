// Структурой для хранения последовательных данных является массив.

const bigEmptyArray = [];
bigEmptyArray.length = 10000; //массив и 10 000 элементами, первоначальных равных undefined 

const arrayLike = { length: 3, '0': 'Peter', '1': 'Paul', '2': 'Mary' };
const elements = Array.from(arrayLike)// преобразуем объект в массив
console.log(elements) //[ 'Peter', 'Paul', 'Mary' ]

// Индексы массива по сути - это его ключи ( подобно ключам в объекте); Ключ свойства всегда является строкой

const someNames = [, "Rick", , "Pravik"]// length 4 
console.log(someNames.length)//4
//Длина корректируется, когда индексному свойству присваивается значение:
someNames[5] = 'Harry';
console.log(someNames.length)//6

// Если длина уменьшается, то все элементы, индексы которых больше или равны новой длине, удаляются.
someNames.length = 4;
console.log(someNames.length)//4

// Чтобы выяснить является ли элемент(по индексу) отсутствующим можем воспользоваться оператором in
console.log(someNames)
console.log(1 in someNames)//true такой элемент есть и он не пустой
console.log(0 in someNames)// false пустой элемент


const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//перевернем массив на месте с помощью метода reverse()
console.log(arrayA.reverse())// [9,8,7,6,5,4,3,2,1]

//сортируем массив на месте с помощью  метода sort(). arr.sort(comparisonFunction) функция сравнения принимает два элемента x,y и возвращает сравненные элементы
const arraySort = arrayA.sort((x, y) => x - y)//
console.log(arraySort)// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Если функция сравнения не задана, то метод sort() преобразует элементы в строки и сравнивает их. Для чисел хуже такой функции не придумаешь.

//метод flat разглаживает многомерные массивы 
const arrayB = [[1, 2, 3, 4], [5, 6, 7, 8, 9]];
const arrayFlat = arrayB.flat();
console.log(arrayFlat);// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// метод filter возвращает все значения, удовлетворяющие заданному условию
const negatives = [-1, 7, 2, -9].filter(x => x < 0);
console.log(negatives); // [-1, -9]

// метод join(separator) преобразует все элементы массива в строки и соединяет их заданным разделителем separator. По умолчанию разделитель равен ','

console.log([1, 2, 3, [4, 5]].join(' and '))// '1 and 2 and 3 and 4,5'

//Разряженные массивы - это массивы в которых отсутствуют элементы в массивной очереди., добавленные эелементы с индексом, больше или равным длине массива, увелечение длины массива без свойств, удаление элемента массива