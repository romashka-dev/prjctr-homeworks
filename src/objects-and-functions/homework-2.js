'use strict';

// --- TASK 1 --- //
// Задача про обчислення різниці часу
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days', 'hours', 'minutes', seconds)
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
const durationBetweenDates = (dateFrom = new Date('31 Jan 2022'), dateTo = new Date(), dimension = 'days') => {
    const start = new Date(dateFrom);
    const end = new Date(dateTo);

    // Перевіряємо чи дійсно в змінних буде дата, щоби уникнути помилок
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return 'Invalid date';
    }

    const durationInSeconds = Math.ceil(Math.abs(end.getTime() - start.getTime()) / 1000);
    const durationInMinutes = Math.ceil(Math.abs(end.getTime() - start.getTime()) / (1000 * 60));
    const durationInHours = Math.ceil(Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60));
    const durationInDays = Math.ceil(Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    switch (dimension) {
        case 'days':
            return `${durationInDays} days`;
        case 'hours':
            return `${durationInHours} hours`;
        case 'minutes':
            return `${durationInMinutes} minutes`;
        case 'seconds':
            return `${durationInSeconds} seconds`;
        default:
            return 'Invalid dimension';
    }
};
// Test of durationBetweenDates():
// console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
// console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'





// --- TASK 2 --- //
// Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584'
};

const optimizer = (data) => {
    const updatedData = {};

    for (const item in data) {
        const lowerCaseKey = item.toLowerCase();
        updatedData[lowerCaseKey] = parseFloat(data[item]).toFixed(2);
    }

    return updatedData;
};

let updatedPriceData = optimizer(priceData);
// Test of durationBetweenDates():
// console.log(updatedPriceData) // { apples: '23.40', bananas: '48.00', oranges: '48.76' }





// --- TASK 3 --- //
// Задача про рекурсію та ітерацію
// Напишіть:
// — функцію яка рекурсивно буде знаходити суму всіх непарних додатних чисел до якогось числа.
const recursiveOddSumTo = (number) => {
    if (number <= 0) {
        return 0;
    } else if (number % 2 !== 0) {
        return number + recursiveOddSumTo(number - 2);
    } else {
        return recursiveOddSumTo(number - 1);
    }
};
// console.log(recursiveOddSumTo(1)) // 1
// console.log(recursiveOddSumTo(10)) // 25

// — функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатних чисел до якогось числа.
const iterativeOddSumTo = (number) => {
    let sum = 0;

    for (let i = 1; i <= number; i += 2) {
      sum += i;
    }
  
    return sum;
};
// console.log(iterativeOddSumTo(1)) // 1       
// console.log(iterativeOddSumTo(10)) // 25