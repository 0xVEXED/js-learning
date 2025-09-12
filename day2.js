//День 2: Типы данных и операции
let name = "Frey";
let age = 32;
let status = true; //"учусь JS"
let unde = undefined;
let zero = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof status);
console.log(typeof unde);
console.log(typeof zero);

let x = 2;
let y = 3;
console.log(x > y, x < y, x >= y, x === y, x !== y);


let result = "Возраст: " + 23;
console.log(result);

//Что произойдет, если сложить строку и число?
//ответ они склеются

//Что вернёт typeof null? Почему это странно?
//ответ вернет object , давно была ошибка в реализации