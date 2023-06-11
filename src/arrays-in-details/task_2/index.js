// --- TASK 2 --- //
// Задача на розворот числа:
const currentMaxValue = 4589;

// тут ваш код...
let temp = currentMaxValue;
temp = String(temp);
let tempReverse = temp.split('').reverse().join('');
tempReverse = Number(tempReverse);

let reverseMaxValue = tempReverse;

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'