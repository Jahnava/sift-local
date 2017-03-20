var totalBoxes = 500;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

console.log(screenWidth);
console.log(screenHeight);

//width (px) of one box = screenWidth/columns
//height (px) of one box = screenHeight/rows

for(var p = 0; p < 501; p++){
  var new_col_div = document.createElement("div");
  new_col_div.className = "col-xs-1";
  document.body.appendChild(new_col_div);
  new_col_div.id = `${p}` //tag each box with the id row,column

}


//upon page reload, choose x number of random boxes to fill in
