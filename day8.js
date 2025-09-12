//День 8: Массивы объектов

//Создай массив объектов students
let user = [
    { name: "Frey", age: 32, isPassed: true,},
    { name: "Glen", age: 7, isPassed: false,},
    { name: "Dasha", age: 31, isPassed: true,},
    { name: "Andr", age: 55, isPassed: false,},
    { name: "Serg", age: 30, isPassed: false,},
]

//Выведи имена всех, кто сдал (isPassed = true)
for (let i = 0; i < user.length; i++) {
    if (user[i].isPassed == true) {
       console.log(user[i].name + " Ура вы сдали!");
    }
}

//Добавь нового студента в конец массива
user.push({name: "Bios", age: 55, isPassed: true,});

//Выведи средний возраст всех студентов

function calcAverage() {
    let sum = 0;
    for (let i = 0; i < user.length; i++) {
        sum += user[i].age;
    }
    return sum / user.length;
}
console.log(calcAverage());

//Создай массив books, где каждая книга содержит
let books = [
    { title: "Wars13", author: "Frey", year: 2010,},
    { title: "Terk3", author: "Glen", year: 1992,},
]

books.push({title: "SuppOrt", author: "Dasha", year: 2030,});
books.push({title: "eefwerf", author: "Andr", year: 1864,});
books.push({title: "dad", author: "Serg", year: 2001,});

for (let i = 0; i < books.length; i++) {
    if (books[i].year > 2000) {
       console.log(books[i].title + " Вышла после 2000 года");
    }
}
