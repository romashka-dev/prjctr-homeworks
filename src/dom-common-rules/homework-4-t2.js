'use strict';

// --- TASK 2 --- //
// Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом:
// - Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
// - В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// - Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
// - Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
// - Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// - Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
// - Логіку роботи реалізуйте в окремому js-файлі.

function showDifferentBgByClick() {
    const myDiv = document.querySelector('.myDiv');
    const myBtn = document.querySelector('.myBtn');
    const body = document.getElementsByTagName('body');

    body[0].classList.add('turn-off');
    const span = document.createElement('span');

    myBtn.addEventListener('click', function() {
        if (body[0].classList.contains('turn-off')) {
            body[0].classList.remove('turn-off');
            body[0].classList.add('turn-on');
            myBtn.innerHTML = "Turn on";

            const turnOffDate = new Date().toISOString();
            span.innerHTML = `Last turn off: ${turnOffDate.substring(0, 10)}` + ' ' + `${turnOffDate.substring(11, 19)}`;
            myDiv.appendChild(span);
        } else {
            body[0].classList.remove('turn-on');
            body[0].classList.add('turn-off');
            myBtn.innerHTML = "Turn off";

            const turnOnDate = new Date().toISOString();
            span.innerHTML = `Last turn on: ${turnOnDate.substring(0, 10)}` + ' ' + `${turnOnDate.substring(11, 19)}`;
            myDiv.appendChild(span);
        }
    })
}
showDifferentBgByClick();
