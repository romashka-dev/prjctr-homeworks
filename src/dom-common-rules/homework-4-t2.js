'use strict';

// --- TASK 2 --- //
// Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом:
// - Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
// - В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// - Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
// - Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
// - Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// - Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
// - Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.
// - Логіку роботи реалізуйте в окремому js-файлі.

function showDifferentBgByClick() {
    const myDiv = document.querySelector('.myDiv');
    const myBtn = document.querySelector('.myBtn');
    const body = document.querySelector('body');

    // Перевірка, чи є дані в local storage про стан кнопки та останню зміну стану
    if (localStorage.getItem('buttonState')) {
        const buttonState = localStorage.getItem('buttonState');
        body.classList.add(buttonState);

        if (buttonState === 'turn-off') {
            myBtn.innerHTML = "Turn off";
        } else {
            myBtn.innerHTML = "Turn on";
        }
    } else {
        //  Якщо даних не має - встановлюємо початковий стан
        body.classList.add('turn-off');
    }
    
    // Додаємо обробник події на клік ... 
    // - щоби додати на сторінку необхідний клас
    // - створити додатковий html елемент для виведення дати
    const span = document.createElement('span');
    span.classList.add('date-preview');

    myBtn.addEventListener('click', function() {
        if (body.classList.contains('turn-off')) {
            body.classList.remove('turn-off');
            body.classList.add('turn-on');
            myBtn.innerHTML = "Turn on";

            const turnOffDate = new Date().toISOString();
            span.innerHTML = `Last turn off: ${turnOffDate.substring(0, 10)} ${turnOffDate.substring(11, 19)}`;
            myDiv.appendChild(span);
            
            // Зберігаємо дату останньої зміни стану в local storage
            const lastDateStateTurnOff = span.innerHTML;
            localStorage.setItem('lastDateState', lastDateStateTurnOff);
        } else {
            body.classList.remove('turn-on');
            body.classList.add('turn-off');
            myBtn.innerHTML = "Turn off";

            const turnOnDate = new Date().toISOString();
            span.innerHTML = `Last turn on: ${turnOnDate.substring(0, 10)} ${turnOnDate.substring(11, 19)}`;
            myDiv.appendChild(span);

            // Зберігаємо дату останньої зміни стану в local storage
            const lastDateStateTurnOn = span.innerHTML;
            localStorage.setItem('lastDateState', lastDateStateTurnOn);
        }

        // Зберігаємо стан кнопки в local storage
        const buttonState = body.classList.contains('turn-off') ? 'turn-off' : 'turn-on';
        localStorage.setItem('buttonState', buttonState);
    })

    // Перевіряємо, чи є в localStorage якісь останні дані. Якщо є, тоді виводимо на сторінку.
    if (localStorage.getItem('lastDateState')) {
        const lastDateState = localStorage.getItem('lastDateState');
        span.innerHTML = lastDateState;
        myDiv.appendChild(span);
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    showDifferentBgByClick();
});
