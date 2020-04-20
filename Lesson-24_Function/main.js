"use strict";

// 1. Функция, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function compare(a1, b1) {
    let c1 = a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
alert(c1);
}

let a1 = prompt('Введите первое число.');
if (Number.isNaN(Number(a1))) {
    alert(`${a1} - это не число.`);
    } else {
        let b1 = prompt('Введите второе число.');
        if (Number.isNaN(Number(b1))) {
            alert(`${b1} - это не число.`);
        } else {
        compare(a1, b1);
}}

// 2. Факториал.
function factorial(a2) {
   let c2 = 1;
   for (let i = 1; i <= a2; i++) {
   c2 *= i
   }
    alert(c2);
}

let a2 = prompt('Введите число для определения факториала.');
if (Number.isNaN(Number(a2))) {
    alert(`${a2} - это не число.`);
    } else {
    factorial(a2);
    }

// 3. Превращает три отдельные цифры в одно число.
function union(a3, b3, c3) {
    let d3 = Number(a3 + b3 + c3);
    alert(d3);
}

let a3 = prompt('Введите первое число.');
if (Number.isNaN(Number(a3))) {
    alert(`${a3} - это не число.`);
    } else if (a3.length > 1) {
        alert(`Введите цифру.`);
        } else {
        let b3 = prompt('Введите второе число.');
        if (Number.isNaN(Number(b3))) {
            alert(`${b3} - это не число.`);
        } else if (b3.length > 1) {
            alert(`Введите цифру.`);
            } else{
            let c3 = prompt('Введите третье число.');
        if (Number.isNaN(Number(c3))) {
            alert(`${c3} - это не число.`);
        } else if (c3.length > 1) {
            alert(`Введите цифру.`);
            } else {
            union(a3, b3, c3);
}}}

// 4. Площадь прямоугольника (квадрата).
function rectangleArea(rectangleLength, rectangleWidth) {
    let area = (rectangleLength == 0) ? Math.pow(rectangleWidth, 2) :
                (rectangleWidth == 0) ? Math.pow(rectangleLength, 2) :
                rectangleLength * rectangleWidth;
    alert(area);
}

let rectangleLength = prompt('Введите длину прямоугольника.');
if (Number.isNaN(Number(rectangleLength))) 
    {
    alert(`${rectangleLength} - это не число.`);
    } else 
{
    let rectangleWidth = prompt('Введите ширину прямоугольника.');
    if (Number.isNaN(Number(rectangleWidth))) 
        {
            alert(`${rectangleWidth} - это не число.`);
        } else  
            rectangleArea(rectangleLength, rectangleWidth);
        }

// 5. Совершенное число.
function perfectNumber(a5) {
   for (let n = 1; n <= a5 / 2 ; n++) {
   if (a5 % n == 0) 
    b5 += n;
    // console.log(n);
   }
   if (b5 == a5 && a5 != 0)
   c5 = 1;
}

let a5 = prompt('Введите число для проверки, совершенное ли оно.');
let b5 = 0;
let c5 = 0;
if (Number.isNaN(Number(a5)) || a5 === '') 
    {
        alert(`${a5} - это не число.`);
    } else {
    perfectNumber(a5);
    let message5 = (c5 == 1) ?
    `Число ${a5} - совершенное.` :
    `Число ${a5} - несовершенное.` ;
    alert(message5);
    }

// 6. Совершенное число из диапазона чисел.
function range () {
let min = prompt('Введите минимальное число из диапазона.');
let c6 = 0;
if (Number.isNaN(Number(min)) || min === '') 
    {
        alert(`${min} - это не число.`);
    } else {
    let max = prompt('Введите максимальное число из диапазона.');
    if (Number.isNaN(Number(max)) || max === '')
        {
            alert(`${max} - это не число.`);
        } else {
            for (let i6 = +min; i6 <= +max; i6++) {
            a5 = i6;
            b5 = 0;
            c5 = 0;
            // console.log(a5);
            perfectNumber(a5);
            if (c5 == 1) {
            alert (`Число ${a5} - совершенное.`);
            c6 = 1;
            }
            }
            if (c6 == 1) {
            alert (`В заданном диапазоне больше нет совершенных чисел.`)
            } else 
            alert (`В заданном диапазоне нет совершенных чисел.`)
        }
    }
}

range ()

// 7. Время (часы, минуты, секунды) на экран в формате «чч:мм:сс».
function screenTime() {
let hours7 = prompt('Введите часы.');
let minutes7 = prompt('Введите минуты.');
let seconds7 = prompt('Введите секунды.');
let today7 = new Date(0, 0, 0, hours7, minutes7, seconds7);
alert(today7.toLocaleTimeString());
}

screenTime();

// 8. Возвращает время в секундах.
let secondsResult = 0;
function screenSeconds() {
    let hours8 = prompt('Введите часы.');
    let minutes8 = prompt('Введите минуты.');
    let seconds8 = prompt('Введите секунды.');
    secondsResult = 3600 * hours8 + 60 * minutes8 + +seconds8;
    }
  
screenSeconds();
alert(secondsResult);

// 9. Количество секунд переводит в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
let timeResult9 = 0;

function secondsToTime() {
    let time9 = new Date(0, 0, 0, 0, 0, seconds9);
    timeResult9 = time9.toLocaleTimeString();
    }

let seconds9 = prompt('Введите секунды.');
secondsToTime();
alert(timeResult9);

// 10. Разница между датами.
// let seconds9 = 0; // Задаю выше

function dateDifference () {
    screenSeconds();
    let date10_1 = secondsResult;
    screenSeconds();
    let date10_2 = secondsResult;
    seconds9 = Math.abs(date10_2 - date10_1);
    secondsToTime();
    alert(timeResult9);
}

dateDifference ();