"use strict";

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let calcSumRange = () => {
    let numbers = {};
    numbers.num1 = inputNum('первое ');
    if (checkNum(numbers.num1)) {
        return;
    } else {
        numbers.num2 = inputNum('второе ');
        if (checkNum(numbers.num2)) {
            return;
        }
        else {
        sumRange(numbers);
        }
    }
}
let inputNum = (i) => {
    return prompt(`Введите ${i}число.`);
}
let checkNum = (n) => {
    if (Number.isNaN(Number(n)) || n == '' || /[\s]/.test(n) || n == null) {
        alert(`${n} - это не число.`);
        // alert(`Число не введено.`);
        return true
    } else {
        return false
        }
}
let sumRange = (a) => {
    let min = Math.min(a.num1, a.num2);
    let max = Math.max(a.num1, a.num2);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    alert(`Сумма всех чисел заданного диапазона: ${sum}`);
}
calcSumRange();

// 2. Запросить 2 числа и найти только наибольший общий делитель.
let greatestCommonFactor = () => {
    let numbers = {};
    numbers.num1 = inputNum('первое ');
    if (checkNum(numbers.num1)) {
        return;
    } else {
        numbers.num2 = inputNum('второе ');
        if (checkNum(numbers.num2)) {
            return;
        }
        else {
            grComFactor(numbers);
        }
    }
}
let grComFactor = (a) => {
    let i = a.num1;
    while (i) {
        if ( a.num1 % i == 0 && a.num2 % i == 0 ) {
           return alert(`Наибольший общий делитель для чисел ${a.num1} и ${a.num2} - число ${i}.`);
        } else {
            i--;
            }
    }
}
greatestCommonFactor();

// 3. Запросить у пользователя число и вывести все делители этого числа.
let allDividers = (a) => {
    a = inputNum('');
    if (checkNum(a)) {
        return;
    } else {
        alert(dividers(a));
        }
};
let dividers = (a) => {
    let answer = `Все делители числа ${a}:\n`;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            answer += i + '; ';
        }
    }
    answer += a + '.';
    return answer;
};
allDividers();

// 4. Определить количество цифр в введенном числе.
let numberOfNum = (a) => {
    a = inputNum('');
    if (checkNum(a)) {
        return;
    } else {
        alert(`Количество цифр в введенном числе - ${a.length}.`);
        }
};
numberOfNum();

// 5. 10 чисел. Сколько положительных, отрицательных и нулей; четных и нечетных.
let stat = (a) => {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let even = 0;
    let odd = 0;
    for (let i = 1; i <= 10; i++) {
        a = inputNum(i + '-е ');
        if (checkNum(a)) {
            alert(`Вводите числа.`);
        } else {
            if (a == 0) zero++;
                else {
                    if (a > 0) pos++;
                    else neg++;
                    if (a % 2 == 0) even++;
                    else odd++;
                };
          }
    }
    alert(`Статистика введеных чисел:\nположительных - ${pos},\nотрицательных - ${neg},\nнулей - ${zero},\nчётных - ${even},\nнечётных - ${odd}.`)
};
stat();

// 6. Запросить у пользователя 2 числа и знак, решить пример, вывести результат.
let calc = (a, b) => {
    do {
        do {
            a = inputNum('первое '); 
        } while (checkNum(a));
        do {
            b = inputNum('второе ');
        } while (checkNum(b));
        let res;
        let s = sign();
        switch (s) {
            case '+':
            res = +a + +b;
            break;
            case '-':
            res = +a - +b;
            break;
            case '*':
            res = +a * +b;
            break;
            case '/':
            res = +a / +b;
            break;
        }
        alert(`${a} ${s} ${b} = ${res}`);
    } while (
        confirm('Хотите решить ещё один пример?')
    )
};
let sign = (sig) => {
    do {
    sig = prompt('Введите арифметический знак: +, -, * или /.');
    }
    while (sig !== '+' && sig !== '-' && sig !== '*' && sig !== '/');
    return sig;
}
calc();

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть.
let input7 = (a, b) => {
    do {
        a = inputNum('многозначное '); 
    } while (checkNum(a));
    do {
        b = howManyDigits(); 
    } while (checkNum(b));
    move(a, b)
}
let howManyDigits = () => {
    return prompt(`На сколько цифр его сдвинуть?`);
}
let move = (c, d) => {
    let arr = [];
    arr = c.split('');
    let arr2 = arr.splice(0, d);
    alert(arr.concat(arr2).join(''));
}
input7();

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?»
let date = () => {
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
    let i = 0;
    while (i < 7) {
        if (confirm(`${days[i]}. Хотите увидеть следующий день?`)) {
            i++;
            if (i > 6) i = 0;
        } else return
    }
}
date();

// 9. Вывести таблицу умножения для всех чисел от 2 до 9.
let multiplicationTable = () => {
    let mt = ` Таблица умножения\n`
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            mt += `${i} x ${j} = ${i * j}\n`
        }
        mt += `\n`
    }
    console.log(mt);
}
multiplicationTable();

// 10. Игра «Угадай число».
let guessNumber = () => {
    let n = 100;
    alert(`Загадайте число от 0 до ${n}.`);
    n /= 2;
    let m = n;
    let inn = input10(n);
    while (inn !== `=`) {
        m /= 2;
        if (inn === `>`) {
            n = n + +m.toFixed();
        } else {
            n = n - +m.toFixed();
        }
        inn = input10(n);
    };
    alert(`Игра окончена.`);
}
let input10 = (i) => {
    let inp;
    do {
        inp = prompt(`Ваше число > ${i}, < ${i} или = ${i}?`);
    } while (inp !== '>' && inp !== '<' && inp !== '=');
    return inp;
}
guessNumber();