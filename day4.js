//День 4: Циклы (for, while, do...while)

//Выведи числа от 1 до 10.
for (let i = 1; i <= 10; i++){
    console.log("цикл for " + i);
}

//Выведи только чётные числа от 0 до 20.
let y = 0;
while (y < 20) {
  y++;
  if (y % 2 == 0) console.log("цикл while " + y);
}

//Выведи числа от 5 до 1 (обратный порядок).
let x = 5;
do {
  console.log("цикл do while " + x);
  x--;
} while (x >= 1);

//Посчитай сумму всех чисел от 1 до 100
let sum = 0;
for (let t = 1; t <= 100; t++){
    sum += t;
    console.log("Сумма: " + sum);
}

//Бонус: Таблица умножения на 5 (for)
let r = 5;
let rest = 0;
for (let s = 1; s <= 10; s++){
    rest = r * s;
    console.log(r + "x" + s + "=" + rest);
}