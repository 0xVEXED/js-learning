//День 3: Условия (if, else, тернарный оператор)
let age = 19;
if(age >= 18) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}

let score = 85;

if(score >= 90) {
    console.log("Отлично");
} else if (score >= 75) {
    console.log("Хорошо");
} else if (score >= 60) {
    console.log("Удовлетворительно");
} else {
    console.log("Неудовлетворительно");
}


let isMember = true;
let result = isMember === true ? "10%" : "0%";
console.log("Скидка: "+result);



let isOnline = true;
let isPremium = false;
let res = isOnline && isPremium ? "Показать контент" : "Нет доступа";
console.log(res);