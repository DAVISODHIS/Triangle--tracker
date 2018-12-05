function triangle() {
    
    var sides = [];

    sides.push(document.getElementById("num1").value);
    sides.push(document.getElementById("num2").value);
    sides.push(document.getElementById("num3").value);

  var [a,b,c] = sides;
  var display = document.getElementById("display");
  var explanation = document.getElementById("explanation");
  if(a.length === 0 || b.length === 0 || c.length === 0 ) {
    
    display.innerHTML = "<p>Please <span class='fill'>FILL</span> all the fields</p>" 
  } else {
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);
      Track(a,b,c);
    }
}
function track(a,b,c) {
    if(a + b > c && b + c > a && c + a > b) {
      if(a === b && a === c) {
        display.innerHTML =