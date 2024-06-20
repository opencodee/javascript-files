let date = new Date();
let hours = date.getHours();

let greeting;
if (hours >= 5 && hours < 12) {
    greeting = 'Доброе утро!';
} else if (hours >= 12 && hours < 18) {
    greeting = 'Добрый день!';
} else {
    greeting = 'Добрый вечер!';
}

document.getElementById('greeting').innerText = greeting;