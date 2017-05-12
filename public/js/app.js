var totalBoxes = 524;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

//console.log(screenWidth);
//console.log(screenHeight);

//width (px) of one box = screenWidth/columns
//height (px) of one box = screenHeight/rows

for(var p = 0; p < totalBoxes+1; p++){
  var new_col_div = document.createElement("div");
  new_col_div.className = "col-xs-1";
  document.body.appendChild(new_col_div);
  new_col_div.id = `${p}`; //tag each box with the id row,column
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

//text turn red with mouse over
document.getElementById("directions").onmouseover = function() {mouseOver();};
document.getElementById("directions").onmouseout = function() {mouseOut();};

function mouseOver() {
    document.getElementById("directions").style.color = "red";
}

function mouseOut() {
    document.getElementById("directions").style.color = "black";
}

//shuffle
function shuffle(arr){
   var currentIndex = arr.length, temporaryValue, randomIndex;

   while (0 !== currentIndex){
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;

     temporaryValue = arr[currentIndex];
     arr[currentIndex] = arr[randomIndex];
     arr[randomIndex] = temporaryValue;
   }
   console.log(arr);
  }

//random image load //not working yet
function randomImage(){
    var imgCount = 3;
        var dir = '/images/';
        var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
        var images = new Array[3];
                images[0] = "starry_night.jpg";
                images[1] = "starry_night.jpg";
                images[2] = "starry_night.jpg";
        document.getElementById('divID').style.backgroundImage = "url(" + dir + images[randomCount] + ")";
}



//
// New Approach Ideas:
//
// If only 1 user, Load image with 1 single gridbox.
//   When the one user logs in display the whole image.
//
// When another user exists, split the image into 2 gridboxes.
//   When each user logs in, one of the grids would be displayed to show half of the image.
//
//
var totalUsers;
var activeUsers;

//How can we get these values from SyftLocal?

totalUsers = getTotalUsers();
activeUsers = getActiveUsers();


function getTotalUsers(){
  return 524;
}

function getActiveUsers(){
  return 24;
}


// When N users exist, split the image into N boxes.
//   When any of the N users log in, show a box...
//     Random boxes or same box for same user at all times?
//
// N boxes splitting up the image
//   - Same size (will have to figure out how to avoid overflow)
//   - Random sizes - could look more "artistic"
//
