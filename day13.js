//День 13 — Работа с API (fetch)

// Сделай запрос на https://jsonplaceholder.typicode.com/users и выведи имена всех пользователей
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();
        
        // Перебираем массив пользователей и выводим их имена
        users.forEach(user => {
            console.log(user.name);
        });

    } catch (error) {
        console.log("Ошибка:", error);
    }
}

getUsers();
