function triangle() {
    var a = parseInt(document.getElementById('num1').value);
    var b = parseInt(document.getElementById('num2').value);
    var c = parseInt(document.getElementById('num3').value);
    var display = document.getElementById("display");

    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && a === c) {
            display.innerHTML = 'Equilateral Triangle';
        } else if (a === b || b === c || a === c) {
            display.innerHTML = 'Isosceles Triangle';
        } else if (a !== b || b !== c || a !== c) {
            display.innerHTML = 'Scalene Triangle';
        }
    } else if (a + b <= c || b + c <= a || a + c <= b) {
        display.innerHTML = 'not a triangle '
    } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
        display.innerHTML = 'Not a number'
    }
};