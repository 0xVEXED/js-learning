//День 12: Асинхронность и работа с API

//Сделай так, чтобы через 3 секунды выводилось сообщение:
setTimeout(function() {
    console.log("Прошло 3 секунды");
}, 3000); // 3000 мс = 3 секунды


//Сделай счётчик, который каждую секунду выводит числа от 1 до 5,а потом останавливается
let count = 1;
let id = setInterval(() => {
  console.log(count);
  count++;
  
  if (count > 5) {
    clearInterval(id); // останавливаем, когда достигли 5
    console.log("Счётчик остановлен");
  }
}, 1000);

//Создай промис, который через 2 секунды возвращает строку "Успех!", и выведи её в консоль с помощью .then
let promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Успех!");
    }, 2000);
});

promise.then(function(result) {
    console.log(result);
});

//Создай функцию loadData, которая ждёт промис с данными "Загрузка завершена" и выводит результат в консоль
let prom = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Загрузка завершена");
    }, 7000);
});

prom.then(function(result) {
    console.log(result);
});