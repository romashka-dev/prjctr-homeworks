// --- TASK 1 --- //
// Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames;

// тут ваш код ...
initials[0] = "П.О.І.";
initials[1] = "Г.П.А.";
initials[2] = "Р.А.О.";

itemOfArray1 = initials[0];
initials[0] = initials[1];
initials[1] = itemOfArray1;

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
