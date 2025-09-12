//День 7: Объекты в JavaScript
let person = {
    name: "Frey",
    age: 32,
    isStudent: true,
    city: "Minsk"

}
console.log(person);

//Добавь новое свойство hobby.
person.age = 33;
person.city = "Georgia";
person.hobby = "developer";

//Создай объект book
let book = {
    title: "Harry Potter",
    author: "Rowling",
    year: 1995,
    pages: 258
}
console.log(`Книга ${book.title}, автор: ${book.author}, страниц: ${book.pages}`);


//Создай объект car с вложенным объектом engine
let car = {
  brand: "Toyota",
  model: "Camry",
  engine: {
    volume: 2.5,
    power: 200
  }
};
console.log("марка авто: " + car.brand + " модель: " + car.model + " мощность двигателя: " + car.engine.power);


//Добавь в объект person метод introduce(), который выводит
let pers = {
  name: "Alex",
  age: 32,
  introduce() {
    console.log("Привет, меня зовут " + this.name + " мне " + this.age + " лет. ");
  }
};

pers.introduce();