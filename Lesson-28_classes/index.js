'use strict'

// 1) Реализовать класс, описывающий окружность.

class Circle {
    constructor (rad) {
        this.rad = rad;
    }
    get radius() {
        return `Radius ${this.rad}`;
    }
    set radius(newRad) {
        this.rad = newRad;
    }
    get diametr () {
        return `Diametr ${this.rad * 2}`;
    }
    area () {
        return `Circle area ${(Math.PI * Math.pow(this.rad, 2)).toFixed()}`
    }
    length () {
        return `Circumference ${(2 * Math.PI * this.rad).toFixed()}`
    }
};
let circle = new Circle(7);
console.log(circle.radius);
circle.radius = 9;
console.log(circle.radius);
console.log(circle.diametr);
console.log(circle.area());
console.log(circle.length());

// 2) Реализовать класс, описывающий простой маркер.

class Marker {
    constructor (ink) {
        this.color = 'red';
        this.ink = ink;
    }
    print (text) {
        const per = 0.5;
        let simbols = 0;
        let arrText = text.split('');
        let l;
        arrText.forEach((item) => {
            if (item !== ' ') simbols++;
            arrText.length = (simbols == this.ink / per) ?
            arrText.indexOf(item) + 1 :
            arrText.length = arrText.length;
        })
        document.write(`<p style='color: ${this.color}'>${arrText.join('')}</p>`);

    }
};

let marker = new Marker(10);
marker.print('Volodymyr Nazarenko - Front-End Developer');

class RefillMarker extends Marker {
    constructor (ink, refill) {
        super(ink);
        this.refill = refill;
    }
    get inkLevel () {
        return `Ink level ${this.ink}%`;
    }
    get refillLevel () {
        this.ink += this.refill;
        return `Refill ink level ${this.ink}%`;
    }
    print (text) {
        super.print(text);
    }
};

let refillMarker = new RefillMarker(12, 21);
console.log(refillMarker.inkLevel);
console.log(refillMarker.refillLevel);
refillMarker.print('Volodymyr Nazarenko - Front-End Developer');

// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
const fecthEmployee = (id) => {
    return {
      id,
      name: `UserName ${id}`,
      surname: `UserSurname ${id}`,
      age: Math.floor(Math.random() * 48 + 18),
      street: "1519 Tovos Mill",
      city: "Rohwuzkim",
      phone: "(584) 634-2152",
      email: "bumaceah@ki.pe",
    };
  };

class Employee {
    constructor(employee) {
        this.id = employee?.id;
        this.name = employee?.name;
        this.surname = employee?.surname;
        this.age = employee?.age;
        this.email = employee?.email;
        this.street = employee?.street;
        this.city = employee?.city;
        this.phone = employee?.phone;
        this.arrEmployee = [];
    }
    addArrEmployee (id) {
        this.arrEmployee.push(new Employee(fecthEmployee(id)));
    }
};

let employee = new Employee(fecthEmployee(1));
employee.addArrEmployee(1);
employee.addArrEmployee(2);
employee.addArrEmployee(3);
console.log(employee.arrEmployee);

class EmpTable extends Employee {
    constructor (arrEmployee) {
        super(arrEmployee);
    }

}
let empTable = new EmpTable();
empTable.addArrEmployee(4);
empTable.addArrEmployee(5);
empTable.addArrEmployee(6);
console.log(empTable.arrEmployee);
