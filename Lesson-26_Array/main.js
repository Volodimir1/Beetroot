'use strict';

// 1. Массив «Список покупок».

const list = [{
    name: 'Хлеб',
    amount: 2,
    bought: 'Да'
},
{
    name: 'Молоко',
    amount: 3,
    bought: 'Нет'
},
{
    name: 'Mercedes',
    amount: 1,
    bought: 'Нет'
},
];

function sortList(l) {
let newL = l.sort((a, b) => { // сортировка по наличию
    return b.bought.length - a.bought.length
})
return newL
}

let newList = sortList(list);

let showList = (l) => { // подготовка к выводу
let sh = '';
for (let i = 0; i < l.length; i++) {
   let show = () => {
        let a = '';
        for (let key in l[i]) {
        a = a + key + ': ' + l[i][key] + '\n' ;
        } 
        return a;
    };
    sh += show() + '\n';
}
    return sh;
};

alert(showList(newList));

function addProduct(n, a) {
    let x = 0;
    for (let i = 0; i < newList.length; i++) {
        if ( n === newList[i].name ) { // проверяю название
            x = 1;
            if ( newList[i].bought === 'Да' ) { // проверяю наличие
                console.log(`Товар "${n}" уже куплен.`); 
            } else {
                newList[i].amount += a;
            }
        } 
    }
    if (x == 0) {
                newList.push({
                name: n,
                amount: a,
                bought: 'Нет'  
            })
    }
};
// Добавляю продукты
addProduct('Хлеб', 2);
addProduct('Лимон', 2);
alert(showList(sortList(newList)));
// Покупка продукта
let buyingProduct = (n) => {
    for (let i = 0; i < newList.length; i++) {
        if ( n === newList[i].name )  // проверяю название
            newList[i].bought = 'Да';
    }
};
buyingProduct('Лимон');
alert(showList(sortList(newList)));

// 2. Массив, описывающий чек в магазине.
const receipt = [{
    name: 'Хлеб',
    amount: 2,
    price: 10
},
{
    name: 'Молоко',
    amount: 3,
    price: 24
},
{
    name: 'Лимон',
    amount: 1,
    price: 7
},
];

let showReceipt = (l) => {
    let sh = 'Чек\n';
    for (let i = 0; i < l.length; i++) {
       let show = () => {
            let a = l[i].name + `: ` + l[i].amount + ` x ` + l[i].price + ` = ` + l[i].amount * l[i].price + ` грн.`;
            return a;
        };
        sh += show() + '\n';
    }
        return sh;
    };
    
alert(showReceipt(receipt));

let sumReceipt = (l) => {
    let sr = 0;
    for (let i = 0; i < l.length; i++) {
            sr += l[i].amount * l[i].price ;
    }
        return `Общая сумма покупки:\n\ ${sr} грн.`;
    };
    
alert(sumReceipt(receipt));

let mostExpensivePurchase = (l) => {
    let most = 0;
    let j = 0;
    for (let i = 0; i < l.length - 1 ; i++) {
        if (l[i].amount * l[i].price > l[i + 1].amount * l[i + 1].price) {
            most = l[i].amount * l[i].price;
            j = i;
        } else {
            most = l[i + 1].amount * l[i + 1].price;
            j = i + 1;
        }
    }
        return `Самая дорогая покупка в чеке:\n\ ${l[j].name} ${most} грн.`;
    };
    
alert(mostExpensivePurchase(receipt));
  
let averageCostGood = (l) => {
    let sumCost = 0;
    for (let i = 0; i < l.length; i++) {
        sumCost += l[i].price;
    }
        return `Средняя стоимость товара в чеке:\n\ ${(sumCost / l.length).toFixed(2)} грн.`;
    };
    
alert(averageCostGood(receipt));

// 3. массив CSS-стилей
const cssStyles = [{
    name: 'color',
    value: '#262626',
},
{
    name: 'font-size',
    value: '20px',
},
{
    name: 'text-align',
    value: 'center',
},
{
    name: 'text-decoration',
    value: 'underline',
},
];
let text = 'Актуальный текст.'
let showText = (t) => {
    let st = 'style="';
    for (let i = 0; i < t.length; i++) {
            let a = t[i].name + `: ` + t[i].value + `; `;
        st += a;
    }
let sumText = `<p ${st}">${text}</p>`
    document.write(sumText);
};
showText(cssStyles);

// 4. Массив аудиторий академии.
const academyAudiences = [{
    name: '21',
    places: 15,
    faculty: 'Front-End Розробка'
},
{
    name: '12',
    places: 20,
    faculty: 'Back-End Розробка'
},
{
    name: '23',
    places: 18,
    faculty: 'Front-End Розробка'
},
{
    name: '14',
    places: 12,
    faculty: 'Back-End Розробка'
},
{
    name: '15',
    places: 10,
    faculty: 'Advanced JavaScript'
},
{
    name: '16',
    places: 14,
    faculty: 'Advanced JavaScript'
},
];

let showAcademy = (l) => { // Вывод на экран всех аудиторий
let sh = '';
for (let i = 0; i < l.length; i++) {
   let show = () => {
        let a = '';
        for (let key in l[i]) {
        a = a + key + ': ' + l[i][key] + '\n' ;
        } 
        return a;
    };
    sh += show() + '\n';
}
    return sh;
};

alert(showAcademy(academyAudiences));

let showFaculty = (l, f) => { // для указанного факультета
    let sh = '';
    for (let i = 0; i < l.length; i++) {
        if (l[i].faculty == f) {
       let show = () => {
            let a = '';
            for (let key in l[i]) {
            a = a + key + ': ' + l[i][key] + '\n' ;
            } 
            return a;
        };
    
        sh += show() + '\n';
    }}
        return sh;
    };
    
    alert(showFaculty(academyAudiences, 'Front-End Розробка'));

// которые подходят для переданной группы
const group = {
    name: '20200212_FE_KRE',
    students: 13,
    faculty: 'Front-End Розробка'
};
let show = (l) => {
    let a = '';
    for (let key in l) {
    a = a + key + ': ' + l[key] + '\n' ;
    } 
    return a;
};
let showFacultyGroup = (l, g) => { 
    let sh = ' Group\n' + show(group) + '\n Audiences\n';
    for (let i = 0; i < l.length; i++) {
        if (l[i].faculty == g.faculty && l[i].places >= g.students) {
       let show = () => {
            let a = '';
            for (let key in l[i]) {
            a = a + key + ': ' + l[i][key] + '\n' ;
            } 
            return a;
        };
    
        sh += show() + '\n';
    }}
        return sh;
    };
        alert(showFacultyGroup(academyAudiences, group));

   // сортировка аудиторий по количеству мест
function sortAudiences(l) {
let newAacademyAudiences = l.sort((a, b) => { 
    return a.places - b.places
})
return newAacademyAudiences
}
alert(showAcademy(sortAudiences(academyAudiences)));

 // сортировка аудиторий по названию (по алфавиту)
 function sortAudiencesAlphabet(l) {
    let newAacademyAudiencesA = l.sort((a, b) => { 
        return a.name - b.name
    })
    return newAacademyAudiencesA
    }
    alert(showAcademy(sortAudiencesAlphabet(academyAudiences)));
    
    // amen