'use strict';

// --- TASK 1 --- //
// Напишіть функцію addThemAll, яка буде знаходити суму усіх своїх аргументів 
// незалежно від їх кількості (але без використання вбудованого об'єкту Math). 
// Використайте оператор розширення:
function addThemAll(...args) {
    let sum = 0;
    for (const num of args) {
        sum += num;
    }
    return sum;
};
// console.log(addThemAll(2,4)); // 6*
// console.log(addThemAll(1,2,3,4)); // 10*
// console.log(addThemAll(5,5,10)); // 20*





// --- TASK 2 --- //
// Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b
function multiply(a) {
    return function(b) {
        return a * b;
    };
};
// console.log(multiply(5)(5)); // 25*
// console.log(multiply(2)(-2)); // -4*
// console.log(multiply(4)(3)); // 12*





// --- TASK 3 --- //
// Напишіть функцію яка буде використовуватись для сортування масиву фільмів.
// Функція буде приймати два аргументи:
// - Властивість за якою треба посортувати
// - Опцію напрямку сортування, зростання чи спадання
const movies = [
    {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
    },
    {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
    },
    {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
    },
    {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
    },
];
    
// console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
// console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
// console.log(movies.sort(byProperty('movieName'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

function byProperty(property, direction) {
    return function(a, b) {
        if (direction === '>') {
            if (a[property] > b[property]) {
                return 1;
            } else if (a[property] < b[property]) {
                return -1;
            }
        }
        if (direction === '<') {
            if (a[property] < b[property]) {
                return 1;
            } else if (a[property] > b[property]) {
                return -1;
            }
        }
        if (direction === null) {
            return 0;
        }
    }
};





// --- TASK 4 --- //
// Напишіть функцію detonatorTimer(delay)
// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. 
// Напишіть її двома варіантами:
// Використовуючи setInterval
// Використовуючи вкладений setTimeout

// detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// setInterval
function detonatorTimer(delay) {
    let temp = delay;

    const setIntervalValid = setInterval(() => {
        if (temp > 0) {
            console.log(temp);
            temp--;
        } else {
            clearInterval(setIntervalValid);
            console.log('Boom!');
        }
    }, 1000);
};

// setTimeout
function detonatorTimer(delay) {
    const detonate = () => {
      if (delay > 0) {
        console.log(delay);
        delay--;
        setTimeout(detonate, 1000);
      } else {
        console.log('BOOM!');
      }
    };
  
    detonate();
};





// --- TASK 5 --- //
// Напишіть об'єкт, в якому опишіть свої довільні властивості та довільні методи (2-3 штуки), що ці властивості виводять. 
// Наприклад:
let me = {
    name: 'Mykola',
    residency: 'Lviv',
    gender: 'male',
    age: 31,
    hobby: 'crafting',
    defaultMood: 'focused',
    currentMood: 'sleepy',
    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
        console.log(`I hope that next year I'm gonna be ${this.age+1}`);
    },
    describeMyMood(){
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
}
    
// me.introduce();
// me.prognose();
// me.describeMyMood();

let romanData = {
    name: 'Roman',
    residency: 'Ukraine',
    gender: 'male',
    age: '30',
    hobby: 'programming',
    higherEducation: 'KNU T.Shevchenko',
    bachelorDegree: `bachelor's degree`,
    masterDegree: `master's degree`,
    myDefaultLocation: 'Kyiv',
    myCurrentLocation: 'Kyiv obl.',
    contactInformation: 'email',
    intro() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    },
    education() {
        console.log(`I obtained my ${this.bachelorDegree} and ${this.masterDegree} from ${this.higherEducation} in ${this.myDefaultLocation}.`);
    },
    contactWithMe() {
        console.log(`You can drop me messages by ${this.contactInformation}.`);
    }
}

// romanData.intro();
// romanData.education();
// romanData.contactWithMe();





// --- TASK 6 --- //
// А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту 
// aби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

// romanData.intro = romanData.intro.bind(romanData);
// romanData.education = romanData.education.bind(romanData);
// romanData.contactWithMe = romanData.contactWithMe.bind(romanData);

// setTimeout(romanData.intro, 1000); // виведе коректний результат*
// setTimeout(romanData.education, 2000); // виведе коректний результат*
// setTimeout(romanData.contactWithMe, 3000); // виведе коректний результат*





// --- TASK 7 --- //
// Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
function someFunction() {
    // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль
};

function slower(func, seconds) {
    // тут ваш код для декоратора*
};
    
let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*
    
slowedSomeFunction(/*якісь аргументи*/); // викликаєте декоратор*
    
// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'