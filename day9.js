//День 9: Методы массивов

//Выведи имена всех студентов через forEach
let students = [
  { name: "Frey", age: 32, isPassed: true },
  { name: "Glen", age: 7, isPassed: false },
  { name: "Dasha", age: 31, isPassed: true },
  { name: "Andr", age: 55, isPassed: false },
  { name: "Serg", age: 30, isPassed: false }
];

students.forEach(function(student) {
  console.log(student.name);
});

//Создай новый массив с возрастами студентов (map)
let age = students.map(function(student) {
  return student.age;
});
console.log(age);

//Отфильтруй тех, кто сдал (filter)
let passed = students.filter(function(student) {
  return student.isPassed === true;
});
console.log(passed);

//Найди студента по имени "Dasha" (find)
let dasha = students.find(function(student) {
  return student.name === "Dasha";
});
console.log(dasha);

//Посчитай сумму возрастов всех студентов (reduce)
let totalAge = students.reduce(function(sum, student) {
  return sum + student.age;
}, 0);
console.log(totalAge);

//Создай новый массив строк, например: "Frey (32)" (map)
let nameWithAge = students.map(function(student) {
    return `${student.name} (${student.age})`;
});
console.log(nameWithAge);


//бонус тут нужна помощь
function printPassed(arr) {
  let passed = arr.filter(function(student) {
        return student.isPassed === true;
  });

  passed.forEach(function(student) {
    console.log(`${student.name} сдал. Возраст: ${student.age}`);
  });
}
printPassed(students);
