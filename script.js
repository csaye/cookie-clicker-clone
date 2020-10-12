/*eslint-env es6*/
/*eslint-env browser*/

function get(id) { return document.getElementById(id); }

const cookie = get('cookie');

cookie.onclick = function() {
    
}

cookie.onmouseover = function() {
    cookie.style.backgroundColor = "black";
}

cookie.onmouseout = function() {
    cookie.style.backgroundColor = "transparent";
}
