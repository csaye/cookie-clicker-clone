/*eslint-env es6*/
/*eslint-env browser*/

function get(id) { return document.getElementById(id); }

let cookies = 0;
let cookiesPerSecond = 0;

const cookie = get('cookie');
const cookieCounter = get('cookie-counter');

function updateCookieCounter() {
    cookieCounter.innerHTML = `${cookies} cookies`;
}

cookie.onclick = function() {
    cookies++;
    updateCookieCounter();
}

function update() {
    cookies += cookiesPerSecond;
    updateCookieCounter();
}

setInterval(update, 1000);