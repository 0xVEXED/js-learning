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

//Сделай запрос на https://jsonplaceholder.typicode.com/posts и выведи заголовки (title) всех постов
async function getPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await response.json();
        
        // Перебираем массив пользователей и выводим их имена
        posts.forEach(posts => {
            console.log(posts.title);
        });

    } catch (error) {
        console.log("Ошибка:", error);
    }
}

getPosts();


//Создай функцию loadTodo(id), которая делает запрос: https://jsonplaceholder.typicode.com/todos/{id} и выводит результат (одну задачу по её id)
async function loadTodo(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        const todo = await response.json();
        console.log('Задача:', todo);
        return todo;
        
    } catch (error) {
        console.error('Не удалось загрузить задачу:', error.message);
        return null;
    }
}

// Примеры использования:
loadTodo(1);    // Загрузит первую задачу
loadTodo(5);    // Загрузит пятую задачу
loadTodo(199);  // Загрузит задачу с ID 199


//Сделай ту же самую функцию loadTodo(id), но через async/await
async function loadTodo(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const todo = await response.json();
        console.log('Задача:', todo);
        return todo;

    } catch (error) {
        console.error('Не удалось загрузить задачу:', error.message);
        return null;
    }
}

// Вызываем функцию с разными ID задач:
loadTodo(1);    // Загрузит задачу с номером 1
loadTodo(5);    // Загрузит задачу с номером 5
loadTodo(199);  // Загрузит задачу с номером 199