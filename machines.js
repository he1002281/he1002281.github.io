function lever(){
  document.getElementById("home").innerHTML = '<h2>Levers</h2> <p> Levers are composed of a fulcrum and a rod/platform. </p> <p> There are 3 classes of levers: </p> <p>  - Class 1: fulcrum between load and effort</p><p>  - Class 2: load between fulcrum and effort </p> <p>  - Class 3: effort between fulcrum and load</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/levers.gif"height=1500px width=1200px><p>Ideal mechanical advantage of a lever = (distance between effort and fulcrum)/(distance between load and fulcrum) </p> <img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/lever2.gif" width=800px height=500px> <p><a href="https://www.youtube.com/watch?v=E8RA9Kw_IaE">Levers video</a><p><p></p>';
}
function pulley(){
  document.getElementById("home").innerHTML = '<h2>Pulleys</h2><p>A pulley is a wheel on an axle that supports changes in direction of a string or similar material.</p><p>Ideal mechanical advantage: equivalent to the number of strings supporting load</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/pulley2.gif" width=800px height=500px><p><a href="https://www.youtube.com/watch?v=LiarGb_LK10">Pulleys video</a></p><p></p>';
}
function wheel(){
  document.getElementById("home").innerHTML = '<h2>Wheel and axle</h2><p>A wheel is essentially a lever for rotational force with the wheel as the platform and the axle as the fulcrum.</p><p>Ideal mechanical advantage : (radius of wheel)/(radius of axle)</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/wheel.gif" width=800px height=500px><p><a href="https://www.youtube.com/watch?v=ndT35aqDfAQ">Wheel and axle video</a></p><p></p>';
}
function inclined(){
  document.getElementById("home").innerHTML = '<h2>Inclined plane</h2><p>An inclined plane is a right triangular prism, essentially a ramp.</p><p>Ideal mechanical advantage : (length of hypotenuse)/(length height)</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/incline.gif" width=800px height=500px><p><a href="https://www.youtube.com/watch?v=igrMlzHL-qg">Inclined planes video</a></p><p></p>';
}
function wedge(){
  document.getElementById("home").innerHTML = '<h2>Wedge</h2><p>A wedge is similar to inclined plane but a isosceles triangular prism so it can be used to preform actions like splitting a log.</p><p>Ideal mechanical advantage : (length of long side(s))/(length of short side)</p><img src=http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/wedge.gif width=800px height=500px><p><a href="https://www.youtube.com/watch?v=LAAwZird80k">Wedges video</a></p><p></p>';
}
function screw(){
  document.getElementById("home").innerHTML = '<h2>Screw</h2><p>A screw is a threaded rod with handle to which you apply effort and a point at the end.</p><p>Ideal mechanical advantage : (length of handle)*pi/(length movement per handle turn)</p><img src="http://www2.phy.ilstu.edu/pte/489.01content/simple_machines/simplemachineimages/screw.gif"width=800px height=500px><p><a href="https://www.youtube.com/watch?v=dDEhrpFb1BU">Screws video</a></p>';
}
function home(){
  document.getElementById("home").innerHTML = '<h2>Overview of Simple Machines</h2><p>A simple machine is a mechanical device that changes the direction or magnitude of a force. In general, they can be defined as the simplest mechanisms that use mechanical advantage (also called leverage) to multiply force. Usually the term refers to the six classical simple machines that were defined by Renaissance scientists: levers, pulleys, wheel and axle, inclined planes, wedges, and screws.</p><img src="http://automationprimer.com/wp-content/uploads/2013/10/SimpleMachines.jpg">';
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
