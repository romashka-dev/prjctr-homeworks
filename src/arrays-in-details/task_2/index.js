// --- TASK 2 --- //
// Задача на розворот числа:
const currentMaxValue = 4589;
let reverseMaxValue = currentMaxValue;

// тут ваш код...
reverseMaxValue = String(reverseMaxValue);
reverseMaxValue = reverseMaxValue.split('').reverse().join('');
reverseMaxValue = Number(reverseMaxValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'