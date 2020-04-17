"use strict";

// 1. Возраст.
let age = prompt('Введите свой возраст.');

if (age <= 12) {
   alert(`Вы - ребёнок.`); 
} else if (age <= 18) {
    alert(`Вы - подросток.`);
  } else if (age <= 60) {
        alert(`Вы - взрослый.`);
     } else {
        alert(`Вы - пенсионер.`);  
     }

// 2. Числа и спецсимволы.
let num = prompt('Введите число от 0 до 9.');
if (Number.isNaN(Number(num))) {
    alert(`${num} - это не число.`);
} else if (num.length > 1) {
            alert(`Введите число от 0 до 9.`);
} else {
switch (Number(num)) {
    case 0:
    alert(`)`);
    break;
    case 1:
    alert(`!`);
    break;
    case 2:
    alert(`@`);
    break;
    case 3:
    alert(`#`);
    break;
    case 4:
    alert(`$`);
    break;
    case 5:
    alert(`%`);
    break;
    case 6:
    alert(`^`);
    break;
    case 7:
    alert(`&`);
    break;
    case 8:
    alert(`*`);
    break;
    case 9:
    alert(`(`);
    break;
}}

// 3. Число с одинаковыми цифрами.
let threeDigit = prompt('Введите трёхзначное число.', 'xxx');
if (Number.isNaN(Number(threeDigit))) {
    alert(`${threeDigit} - это не число.`);
} else if (threeDigit.length !== 3) {
        alert(`Ваше число не трёхзначное.`);
    } else {
        let one = threeDigit[0];
        let two = threeDigit[1];
        let three = threeDigit[2];
    
        if (one === two && one == three) {
            alert(`У вас три одинаковых цифры ${threeDigit}.`);
        } else if (one === two) {
                alert(`У вас две одинаковых цифры ${one}${two}.`);
            } else if (two === three) {
                    alert(`У вас две одинаковых цифры ${two}${three}.`);
                } else if (one === three) {
                        alert(`У вас две одинаковых цифры ${one}${three}.`);
                    } else {
                        alert(`В вашем числе нет одинаковых цифр.`);
}}


// 4. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let year = prompt('Введите год.');
if (Number.isNaN(Number(year))) {
    alert(`${year} - это не число.`);
} else if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    alert(`${year}- это високосный год.`);
} else {
    alert(`${year}- это не високосный год.`);
}

// 5. Пятиразрядный палиндром.
let fiveDigit = prompt('Введите пятиразрядное число.', 'xxxxx');
if (Number.isNaN(Number(fiveDigit))) {
    alert(`${fiveDigit} - это не число.`);
} else if (fiveDigit.length !== 5) {
        alert(`Ваше число не пятиразрядное.`);
    } else 
        if (fiveDigit[0] == fiveDigit[4] && fiveDigit[1] == fiveDigit[3])
        {
            alert(`Ваше число - палиндром.`);
        } else {
            alert(`Ваше число не является палиндромом.`);
        }

// 6. Конвертер валют.
let usd = prompt('Введите количество USD.');
const USDEUR = 0.92;
const USDUAH = 27.22;
const USDAZN = 1.7;
if (Number.isNaN(Number(usd))) {
    alert(`${usd} - это не число.`);
} else {
    let currency = prompt('В какую валюту хотите перевести: EUR, UAH или AZN?');
if (currency == 'EUR') {
    alert(`${(USDEUR * usd).toFixed(2)} EUR`);
} else if (currency == 'UAH') {
        alert(`${(USDUAH * usd).toFixed(2)} UAH`);
    } else if (currency == 'AZN') {
            alert(`${(USDAZN * usd).toFixed(2)} AZN`);
        } else {
            alert(`Попробуйте ещё раз.`);
        }
    }

// 7. Скидка.
const discount1 = 0.03;
const discount2 = 0.05;
const discount3 = 0.07;
let purchase = prompt('Введите сумму покупки для определения скидки.');
if (Number.isNaN(Number(purchase))) {
    alert(`${purchase} - это не число.`);
} else if (purchase >= 200 && purchase <= 300) {
    alert(`Сумма к оплате со скидкой: ${(purchase * (1 - discount1)).toFixed(2)}`);
} else if (purchase > 300 && purchase <= 500) {
        alert(`Сумма к оплате со скидкой: ${(purchase * (1 - discount2)).toFixed(2)}`);
    } else if (purchase > 500) {
            alert(`Сумма к оплате со скидкой: ${(purchase * (1 - discount3)).toFixed(2)}`);
        } else {
            alert(`Сумма к оплате: ${(purchase)}`);
        }

// 8. Может ли такая окружность поместиться в указанный квадрат.
let circumference = prompt('Введите длину окружности, м.');
if (Number.isNaN(Number(circumference))) {
    alert(`${circumference} - это не число.`);
} else {
let squarePerimeter = prompt('Введите периметр квадрата, м.');
    if (Number.isNaN(Number(squarePerimeter))) {
        alert(`${squarePerimeter} - это не число.`);
    } else if
        (circumference / Math.PI <= squarePerimeter / 4) 
        {alert(`Эта окружность помещается в этот квадрат.`);} 
        else
       {alert(`Эта окружность не помещается в этот квадрат.`); }
}

// 9. 3 вопроса.
let a = 0;
let firstQuestion = prompt('Кто первым выполнил сальто Делчева? Варианты: 1 - Бубка, 2 - Болт, 3 - Делчев. Введите соответствующую цифру.');
if (firstQuestion == 3) {
    a = a + 2
}
let secondQuestion = prompt('Сколько ног у слона? Варианты: 1 - три, 2 - не знаю, 3 - пять. Введите соответствующую цифру.');
if (secondQuestion == 2) {
    a = a + 2
}
let thirdQuestion = prompt('Сколько сантиметров в метре? Варианты: 1 - три, 2 - много, 3 - около ста. Введите соответствующую цифру.');
if (thirdQuestion == 3) {
    a = a + 2
}
alert(`Вы набрали ${a} балла(ов).`);

// 10. Следущая дата.
alert(`Введите дату (день, месяц, год).`)
let day = prompt('Введите день.');
let monthe = prompt('Введите месяц.');
let dateYear = prompt('Введите год.');
var nextDate = new Date(dateYear, monthe - 1, +day + 1);
alert(`Следущая дата ${nextDate.getDate()}.${nextDate.getMonth() + 1}.${nextDate.getFullYear()}`);
