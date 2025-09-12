//День 11 — Работа с датой и временем в JavaScript

//Создай объект с текущей датой и выведи
let now = new Date();

console.log(`Год ${now.getFullYear()}`);
console.log(`Месяц ${now.getMonth() + 1}`);
console.log(`День ${now.getDate()}`);
console.log(`Часы ${now.getHours()}`);
console.log(`Минуты ${now.getMinutes()}`);

//Создай дату: 25 декабря 2025 и выведи её в консоль
let d = new Date("2025-11-25");
console.log(d);

//Посчитай разницу между ними в днях.
let start = new Date("2023-01-01");
let end = new Date("2024-01-01");
