// --- TASK 3 --- //
// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray;

// тут ваш код...
productOfArray = productOfArray.flat(2);
productOfArray = productOfArray.reduce((a,b) => a * b);

console.log(productOfArray); // 24
