// --- TASK 3 --- //
// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
const resultsArray = [1, 2, [3, [4]]];
let temp = resultsArray;

// тут ваш код...
let getFlatOfArray = temp.flat(2);
let getAmountOfArray = getFlatOfArray[0] * getFlatOfArray[1] * getFlatOfArray[2] * getFlatOfArray[3];

let productOfArray = getAmountOfArray;

console.log(productOfArray); // 24
