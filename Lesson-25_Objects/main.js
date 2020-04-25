"use strict";

// 1. Объект, описывающий автомобиль.

const car = {
    manufacturer: 'Mercedes',
    model: 'G-Class',
    'year of issue': 2020,
    'average speed': 110
}

let showCar = () => {
    let a = '';
    for (let key in car) {
    a = a + key + ': ' + car[key] + '\n' ;
    } 
    return a;
};

alert(showCar());

let calcTime = () => {
let distance = prompt (`Введите, пожалуйста, расстояние в км.`);
let time = (distance / car["average speed"] >= 4) ?
Math.floor(distance / car["average speed"] / 4) * 5 + (distance / car["average speed"]) % 4 :
distance / car["average speed"];
return time;
}
alert (`Необходимое время для преодоления заданного расстояния - ${calcTime().toFixed(1)} ч.`);

// 2. Объект, хранящий в себе отдельно числитель и знаменатель дроби.

const fraction1 = {
    numerator: 2,
    denominator: 3,
};

function showResult(fraction) {
   return `${fraction.numerator}/${fraction.denominator}`;
}

console.log(`1-я дробь: ${showResult(fraction1)}`);
const fraction2 = {
    numerator: 3,
    denominator: 4,
};
console.log(`2-я дробь: ${showResult(fraction2)}`);

let sumFraction = () => {
let sumFr = {};
sumFr.numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
sumFr.denominator = fraction1.denominator * fraction2.denominator;
console.log(`Сумма дробей: ${showResult(sumFr)}`);
};
sumFraction();

let difFraction = () => {
    let difFr = {};
    difFr.numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    difFr.denominator = fraction1.denominator * fraction2.denominator;
    console.log(`Разность дробей: ${showResult(difFr)}`);
    };
    difFraction();

let multipliFraction = () => {
    let multipliFr = {};
    multipliFr.numerator = fraction1.numerator * fraction2.numerator ;
    multipliFr.denominator = fraction1.denominator * fraction2.denominator ;
    console.log(`Результат умножения дробей: ${showResult(multipliFr)}`);
    };
    multipliFraction();
      
let divisionFraction = () => {
    let divisionFr = {};
    divisionFr.numerator = fraction1.numerator * fraction2.denominator ;
    divisionFr.denominator = fraction1.denominator * fraction2.numerator ;
    console.log(`Результат деления дробей: ${showResult(divisionFr)}`);
    };
    divisionFraction();

const fraction3 = {
    numerator: 72,
    denominator: 200,
};
console.log(`3-я дробь: ${showResult(fraction3)}`);
    
let reductionFraction = () => {
let reductionFr = Object.assign({}, fraction3);
for (let i = reductionFr.numerator; i >= 1; i--) {
if (reductionFr.numerator % i == 0 && reductionFr.denominator % i == 0) {
    reductionFr.numerator = reductionFr.numerator / i;
    reductionFr.denominator = reductionFr.denominator / i;
}
}
console.log(`Результат сокращения дроби: ${showResult(reductionFr)}`);
};
reductionFraction();
    
 // 3. Объект, описывающий время (часы, минуты, секунды).

const time = {
    hour: 12,
    minute: 11,
    second: 33,
};

function today(h, m, s) {
    return new Date(0, 0, 0, h, m, s);
}

function showTime(h, m, s) { // Функция вывода времени на экран
    console.log(today(h, m, s).toLocaleTimeString());
}

showTime(time.hour, time.minute, time.second);

function changeSeconds() { // Функция изменения времени на переданное количество секунд
 let change = prompt (`Введите, на сколько секунд нужно изменить.`);
 showTime(time.hour, time.minute, time.second + +change);
}
changeSeconds();

function changeMinutes() { // Функция изменения времени на переданное количество минут
    let change = prompt (`Введите, на сколько минут нужно изменить.`);
    showTime(time.hour, time.minute + +change, time.second);
   }
   changeMinutes();
  
   function changeHours() { // Функция изменения времени на переданное количество часов
    let change = prompt (`Введите, на сколько часов нужно изменить.`);
    showTime(time.hour + +change, time.minute, time.second);
   }
   changeHours();
