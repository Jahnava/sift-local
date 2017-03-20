var totalBoxes = 524;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

console.log(screenWidth);
console.log(screenHeight);

//width (px) of one box = screenWidth/columns
//height (px) of one box = screenHeight/rows

for(var p = 0; p < 525; p++){
  var new_col_div = document.createElement("div");
  new_col_div.className = "col-xs-1";
  document.body.appendChild(new_col_div);
  new_col_div.id = `${p}` //tag each box with the id row,column
}


//upon page reload, choose x number of random boxes to fill in







function clearAll(){
  for (i=0;i<=totalBoxes;i++){
  var thisBoxId = i;
    hide(thisBoxId);
  }
}

function showAll(){
  for (i=0;i<=totalBoxes;i++){
  var thisBoxId = i;
    show(thisBoxId);
  }
}

// hiding the div object makes the picture behind it visible
function show(objectId){
  var obj = document.getElementById(objectId);
  obj.setAttribute('style','visibility:hidden');
}


// showing the div blocks the image behind it
function hide(objectId){
  var obj = document.getElementById(objectId);
  obj.setAttribute('style','visibility:visible');
}
