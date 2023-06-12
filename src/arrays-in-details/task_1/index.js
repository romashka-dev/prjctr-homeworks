// --- TASK 1 --- //
// Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames;

// тут ваш код ...
initials = initials.map(user => user.split(' '));
initials = initials.map(user => user.map(word => word.charAt(0)));
initials = initials.map(user => user.join('.'));
initials = initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
