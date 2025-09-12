//День 6: Массивы в JavaScript
let num = [1, 2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {
    console.log(num [i]);
}


let city = ["London", "Minsk", "Georgia"];
//замена 2го города
city[1] = "Boston";

//Добавь город в конец
city.push("Minsk");

//Выведи длину массива
console.log("Длинна массива: " + city.length);

//Удали первый город
city.shift();

console.log(city);

//Сумма всех чисел массива
let numbers = [3, 7, 2, 5, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


//Найди максимум в массиве (этот я пытался сделать не понимаю , нужна помощь и разбор)
let values = [4, 8, 15, 1, 16, 23];
let max = values[0]; // стартуем с первого

for (let i = 1; i < values.length; i++) {
    if (values[i] > max) {
        max = values[i]; // нашли большее → обновляем
    }
}
console.log("Максимум: " + max); // 23


//создать функцию массив каждый на новой строке
let arr = ["кот", "пёс", "мышь"];
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray(arr);