//День 10 — Методы строк в JavaScript
//Задача 1
let myInfo = "Привет, меня зовут Frey и я изучаю JavaScript";
console.log("Длинна строки: " + myInfo.length);
console.log(myInfo.replace ("Frey", "Vex"));
console.log(myInfo.toUpperCase());

//Проверь, содержит ли строка "JavaScript" подстроку "Script" и "Java"
let text = "JavaScript";
console.log(text.includes("Script"));
console.log(text.includes("Java"));

//Задача 3
let lang = "frontend_developer";

console.log(lang.slice(0, 8));
console.log(lang.slice(9));
let ter = lang.split("_");
console.log(ter);

//Задача 4
let weather = "Сегодня хорошая погода";
console.log(weather.replace ("хорошая", "плохая"));

//бонус
let name = "Vex";
let hobby = "программирование";
let msg = `Привет, я ${name} и моё хобби — ${hobby.toUpperCase()}`;
console.log(msg); // Привет, я Vex и моё хобби — ПРОГРАММИРОВАНИЕ
