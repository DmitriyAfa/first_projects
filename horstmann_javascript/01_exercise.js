// console.log(0 + NaN)//NaN
// console.log(0 + Infinity)// Infinity
// console.log(0 + false)// 0
// console.log(0 + true)// 1
// console.log(0 + null)//0
// console.log(0 + undefined)// NaN

// console.log('' + NaN)//'NaN'
// console.log('' + Infinity)//'Infinity'
// console.log('' + false)//'false'
// console.log('' + true)//'true'
// console.log('' + null)//'null'
// console.log('' + undefined)//'undefined'

// console.log([] + []);//
// console.log({} + []);//[object Object]
// console.log([] + {});//[object Object]
// console.log({} + {});//[object Object][object Object]
// console.log([] - {});//NaN

// console.log(-9 / 3);// -3 
// console.log(-9 % 3);//-0

// let a = `Rick ${`C-${200 - 63}`}`;
// console.log(a);

// let arr = [0, , 2];
// let arr1 = [0, undefined, 2];
// let arr2 = [0, [], 2];
// let arr3 = [0, null, 2];
// console.log(arr, arr1, arr2, arr3)

// let arr = [1, [2[3]], 4];
// let arrToString = arr.join('');
// console.log(arrToString)//14
// arrToString = arr.join();
// console.log(arrToString)//1, , 4

let harry = { friends: [sally] };
let sally = { friends: [harry] };