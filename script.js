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
        display.innerHTML = "<p class='display-text'>That is an <span class='type'>Equilateral</span> triangle<p><span class='fill'>ALL</span> sides are equal";
    } 
    else if(a === b || b === c || a === c) {
      display.innerHTML = "<p class='display-text'>That is an <span class='type'>Isosceles</span> triangle<p><span class='fill'>TWO</span> sides are equal";
    } 
    else {
      display.innerHTML = "<p class='display-text'>That is a <span class='type'>Scalene</span> triangle<p><span class='not'>NO</span> sides are equal";
    } 
  } 
  else if(isNaN(a) || isNaN(b) || isNaN(c)) {
      display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a number</p>";
  } 
  else {
    display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a triangle</p><p>The sum of any two sides should be <span class='fill'>GREATER</span> than the third side</p>"
  }
}