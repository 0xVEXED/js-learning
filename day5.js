//День 5: Функции в JavaScript
function sayHello () {
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
}
sayHello();


function greet(name) {
    console.log("Hello " + name);
}
greet("Frey");
greet("Glen");


function sum(a, b) {
    return a + b;
}
console.log("Результат:", sum(4, 4));


function isAdult(age) {
    return age >= 18;
}
isAdult(19);


function getGrade(score) {
    if(score  >= 90){
        console.log("Отлично");
    } else if (score  >= 75) {
        console.log("Хорошо");
    } else if (score  >= 60) {
        console.log("Удовлетворительно");
    } else {
        console.log("Плохо");
    }
}
getGrade(76);