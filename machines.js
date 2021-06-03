var scheme = -1;
function lever(){
  document.getElementById("home").innerHTML = '<h2>Levers</h2> <p> Levers are composed of a fulcrum and a rod/platform. </p> <p> There are 3 classes of levers: </p> <p>  - Class 1: fulcrum between load and effort</p><p>  - Class 2: load between fulcrum and effort </p> <p>  - Class 3: effort between fulcrum and load</p><img src="levers.jpeg" width="1200" height="1500" style="float:right;"><p>Ideal mechanical advantage of a lever = (distance between effort and fulcrum)/(distance between load and fulcrum) </p> <img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/lever2.gif" width=800px height=500px> <p><a href="https://www.youtube.com/watch?v=E8RA9Kw_IaE">Levers video</a><p><p></p>';
  color();
}
function pulley(){
  document.getElementById("home").innerHTML = '<h2>Pulleys</h2><p>A pulley is a wheel on an axle that supports changes in direction of a string or similar material.</p><p>Ideal mechanical advantage: equivalent to the number of strings supporting load</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/pulley2.gif" width=800px height=500px><p><a href="https://www.youtube.com/watch?v=LiarGb_LK10">Pulleys video</a></p><p></p>';
  color()
}
function wheel(){
  document.getElementById("home").innerHTML = '<h2>Wheel and axle</h2><p>A wheel is essentially a lever for rotational force with the wheel as the platform and the axle as the fulcrum.</p><p>Ideal mechanical advantage : (radius of wheel)/(radius of axle)</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/wheel.gif" width=800px height=500px><p><a href="https://www.youtube.com/watch?v=ndT35aqDfAQ">Wheel and axle video</a></p><p></p>';
  color()
}
function inclined(){
  document.getElementById("home").innerHTML = '<h2>Inclined plane</h2><p>An inclined plane is a right triangular prism, essentially a ramp.</p><p>Ideal mechanical advantage : (length of hypotenuse)/(length height)</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/incline.gif" width=800px height=500px><p><a href="https://www.youtube.com/watch?v=igrMlzHL-qg">Inclined planes video</a></p><p></p>';
  color()
}
function wedge(){
  document.getElementById("home").innerHTML = '<h2>Wedge</h2><p>A wedge is similar to inclined plane but a isosceles triangular prism so it can be used to preform actions like splitting a log.</p><p>Ideal mechanical advantage : (length of long side(s))/(length of short side)</p><img src=http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/wedge.gif width=800px height=500px><p><a href="https://www.youtube.com/watch?v=LAAwZird80k">Wedges video</a></p><p></p>';
  color()
}
function screw(){
  document.getElementById("home").innerHTML = '<h2>Screw</h2><p>A screw is a threaded rod with handle to which you apply effort and a point at the end.</p><p>Ideal mechanical advantage : (length of handle)*pi/(length movement per handle turn)</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/screw.gif"width=800px height=500px><p><a href="https://www.youtube.com/watch?v=dDEhrpFb1BU">Screws video</a></p>';
  color()
}
function home(){
  document.getElementById("home").innerHTML = '<h2>Overview of Simple Machines</h2><p>A simple machine is a mechanical device that changes the direction or magnitude of a force. In general, they can be defined as the simplest mechanisms that use mechanical advantage (also called leverage) to multiply force. Usually the term refers to the six classical simple machines that were defined by Renaissance scientists: levers, pulleys, wheel and axle, inclined planes, wedges, and screws.</p><img src="http://automationprimer.com/wp-content/uploads/2013/10/SimpleMachines.jpg">';
  color()
}
function small(){
  var text=document.getElementsByTagName("p");
  for (var i=0; i<text.length; i++){
    text[i].style.fontSize = "20px";
  }
}
function medium(){
  var text=document.getElementsByTagName("p");
  for (var i=0; i<text.length; i++){
    text[i].style.fontSize = "30px";
  }
}
function large(){
  var text=document.getElementsByTagName("p");
  for (var i=0; i<text.length; i++){
    text[i].style.fontSize = "40px";
  }
}
function xlarge(){
  var text=document.getElementsByTagName("p");
  for (var i=0; i<text.length; i++){
    text[i].style.fontSize = "50px";
  }
}
function change(){
  scheme=scheme*-1;
  color();
}
function color(){
  if(scheme==1){
  var col=document.getElementsByTagName("p");
  for(var i=0;i<col.length;i++){
    col[i].style.color="#777B84";
  }
  col=document.getElementsByTagName("h1");
  for(var i=0;i<col.length;i++){
    col[i].style.color="#00526F";
  }
  col=document.getElementsByTagName("body");
  for(var i=0;i<col.length;i++){
    col[i].style.backgroundColor="#777B84";
  }
  col=document.getElementsByTagName("h2");
  for(var i=0;i<col.length;i++){
    col[i].style.backgroundColor="#210149";
    col[i].style.color="777B84";
  }
  col=document.getElementsByTagName("div");
  for(var i=0;i<col.length;i++){
    col[i].style.backgroundColor="#00526F";
  }
  col=document.getElementsByTagName("a");
  for(var i=0;i<col.length;i++){
    col[i].style.color="#210149";
  }
  col=document.getElementsByTagName("button");
  for(var i=0;i<col.length;i++){
    col[i].style.color="#777B84";
    col[i].style.backgroundColor = "#00526F";
    col[i].style.borderColor = "#00526F";
  }
}
  if(scheme==-1){
    var col=document.getElementsByTagName("p");
    for(var i=0;i<col.length;i++){
      col[i].style.color="white";
    }
    col=document.getElementsByTagName("h1");
    for(var i=0;i<col.length;i++){
      col[i].style.color="#007D72";
    }
    col=document.getElementsByTagName("body");
    for(var i=0;i<col.length;i++){
      col[i].style.backgroundColor="white";
    }
    col=document.getElementsByTagName("h2");
    for(var i=0;i<col.length;i++){
      col[i].style.backgroundColor="grey";
      col[i].style.color="white";
    }
    col=document.getElementsByTagName("div");
    for(var i=0;i<col.length;i++){
      col[i].style.backgroundColor="#007D72";
    }
    col=document.getElementsByTagName("a");
    for(var i=0;i<col.length;i++){
      col[i].style.color="#210149";
    }
    col=document.getElementsByTagName("button");
    for(var i=0;i<col.length;i++){
      col[i].style.color="white";
      col[i].style.backgroundColor = "#007D72";
      col[i].style.borderColor = "#007D72";
    }
  }
}
function check(){
  if(scheme==1){
    var col=document.getElementById("color");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("color");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck(){
  if (scheme==-1){
    var col=document.getElementById("color");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("color");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check1(){
  if(scheme==1){
    var col=document.getElementById("color1");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("color1");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck1(){
  if (scheme==-1){
    var col=document.getElementById("color1");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("color1");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check2(){
  if(scheme==1){
    var col=document.getElementById("color2");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("color2");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck2(){
  if (scheme==-1){
    var col=document.getElementById("color2");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("color2");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check3(){
  if(scheme==1){
    var col=document.getElementById("color3");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("color3");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck3(){
  if (scheme==-1){
    var col=document.getElementById("color3");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("color3");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check4(){
  if(scheme==1){
    var col=document.getElementById("color4");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("color4");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck4(){
  if (scheme==-1){
    var col=document.getElementById("color4");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("color4");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check5(){
  if(scheme==1){
    var col=document.getElementById("color5");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("color5");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck5(){
  if (scheme==-1){
    var col=document.getElementById("color5");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("color5");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check6(){
  if(scheme==1){
    var col=document.getElementById("color6");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("color6");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck6(){
  if (scheme==-1){
    var col=document.getElementById("color6");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("color6");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check7(){
  if(scheme==1){
    var col=document.getElementById("color7");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("color7");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck7(){
  if (scheme==-1){
    var col=document.getElementById("color7");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("color7");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check8(){
  if(scheme==1){
    var col=document.getElementById("small");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("small");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck8(){
  if (scheme==-1){
    var col=document.getElementById("small");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("small");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check9(){
  if(scheme==1){
    var col=document.getElementById("medium");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("medium");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck9(){
  if (scheme==-1){
    var col=document.getElementById("medium");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("medium");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check10(){
  if(scheme==1){
    var col=document.getElementById("large");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("large");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck10(){
  if (scheme==-1){
    var col=document.getElementById("large");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("large");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
function check11(){
  if(scheme==1){
    var col=document.getElementById("xlarge");
      col.style.color="#00526F";
      col.style.backgroundColor = "#777B84";
      col.style.borderColor = "#00526F";
 }
  if(scheme==-1){
    var col=document.getElementById("xlarge");
      col.style.color="#007D72";
      col.style.backgroundColor = "white";
      col.style.borderColor = "#007D72";
  }
}
function uncheck11(){
  if (scheme==-1){
    var col=document.getElementById("xlarge");
      col.style.color="white";
      col.style.backgroundColor = "#007D72";
      col.style.borderColor = "#007D72";
  }
  if (scheme==1){
    var col=document.getElementById("xlarge");
      col.style.color="#777B84";
      col.style.backgroundColor = "#00526F";
      col.style.borderColor = "#00526F";
  }
}
