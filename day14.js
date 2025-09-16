//Создай файл app.js, напиши console.log("Node работает!") и запусти его через node
console.log("Привет из Node.js!");

//Создай сервер (порт 3000), который отвечает: Добро пожаловать на мой первый сервер!
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Привет! Сервер работает 🚀");
});

server.listen(3000, () => {
    console.log("Добро пожаловать на мой первый сервер!");
});

//С помощью модуля fs создай файл hello.txt с текстом "Hello, Node.js", а потом прочитай его и выведи в консоль
const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello, Node.js");

let data = fs.readFileSync("hello.txt", "utf-8");
console.log("Содержимое файла:", data);

//http://localhost:3000