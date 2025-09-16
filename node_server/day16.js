const express = require("express");
const app = express();
const PORT = 3000;

// Главная страница
app.get("/", (req, res) => {
    res.send("Главная страница на Express");
});

// О сайте
app.get("/about", (req, res) => {
    res.send("О сайте на Express");
});

// Наши услуги
app.get("/services", (req, res) => {
    res.send("Наши услуги на Express");
});

// Контакты
app.get("/contact", (req, res) => {
    res.send("Контакты на Express");
});

// Слушаем порт
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
