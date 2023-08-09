'use strict';

// --- TASK 1 --- //
// Для сторінки з вебінару (лінк на гіт) напишіть селектори для наступних елементів:
// - для елементу з текстом 'Навігація по DOM дереву'
// - для першого елементу <section>
// - для елементу списку з текстом 'Пункт 5'
// - для елементу з класом 'hatredLevelBlock'
// Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.
// Приклад:
// let spanWithClass = document.querySelector('.hatredLevelCounter');

let getH2ById = document.getElementById('headerTwo');
getH2ById.classList.add('headerTwo');
console.log(getH2ById);

let getSectionByClass = document.querySelector('.firstSection');
getSectionByClass.classList.add('firstSection--v2')
console.log(getSectionByClass);

let getLiByTag = document.getElementsByTagName('li');
getLiByTag[0].classList.add('item');
console.log(getLiByTag);

let getDivByClass = document.querySelector('.hatredLevelBlock');
getDivByClass.setAttribute('id', 'green-bg');
console.log(getDivByClass);