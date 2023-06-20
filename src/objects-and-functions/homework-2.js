// --- TASK 1 --- //
// Задача про обчислення різниці часу
// Напишіть функцію яка буде буде приймати 3 параметри
// — початкову дату (string)
// — кінцеву дату (string)
// — розмірність ('days', 'hours', 'minutes', seconds)
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

const durationBetweenDates = (dateFrom, dateTo, dimension = 'days') => {
    const start = new Date(dateFrom);
    const end = new Date(dateTo);

    const timeDiff = Math.abs(end.getTime() - start.getTime());

    if (dimension === 'days') {
        const durationInDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return `${durationInDays} days`;
    } else if (dimension === 'hours') {
        const durationInHours = Math.ceil(timeDiff / (1000 * 60 * 60));
        return `${durationInHours} hours`;
    } else if (dimension === 'minutes') {
        const durationInMinutes = Math.ceil(timeDiff / (1000 * 60));
        return `${durationInMinutes} minutes`;
    } else if (dimension === 'seconds') {
        const durationInSeconds = Math.ceil(timeDiff / 1000);
        return `${durationInSeconds} seconds`;
    } else {
        return 'Invalid dimension';
    }
};

// Test of durationBetweenDates():
// console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'
// console.log(durationBetweenDates('01 Jan 2014', '03 Feb 2023', 'days')); // поверне '3320 days'
// console.log(durationBetweenDates('01 Jan 2018', '03 Feb 2023', 'days')); // поверне '1859 days'





// --- TASK 2 --- //
// Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584'
};

const priceData2 = {
    SnEakerS_AirForce_320: '599.45',
    SnEakerS_RunnING_110: '428.1',
    snEakerS_runnING_150: '499.7584'
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
let nikePriceData = optimizer(priceData2);
// Test of durationBetweenDates():
// console.log(updatedPriceData) // { apples: '23.40', bananas: '48.00', oranges: '48.76' }
// console.log(nikePriceData) // { sneakers_airforce_320: '599.45', sneakers_running_110: '428.10', sneakers_running_150: '499.76' }





// --- TASK 3 --- //
// Задача про рекурсію та ітерацію
// Напишіть:
// — функцію яка рекурсивно буде знаходити суму всіх непарних додатних чисел до якогось числа.
const recursiveOddSumTo = (number) => {
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