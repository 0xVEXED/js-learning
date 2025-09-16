//Добавь ещё одну страницу /services → текст "Наши услуги".

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath = "";
    if (req.url === "/") filePath = "index.html";
    else if (req.url === "/about") filePath = "about.html";
    else if (req.url === "/contact") filePath = "contact.html";
    else if (req.url === "/services") filePath = "services.html";
    else filePath = "404.html";

    const fullPath = path.join(__dirname, filePath);

    fs.readFile(fullPath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Ошибка сервера");
        } else {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
