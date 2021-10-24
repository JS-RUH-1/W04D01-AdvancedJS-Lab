// function PrintName(name) {
//   console.log(`Your name is ${name}.`);
// }

let PrintName = (name) => console.log(`Your name is ${name}.`);

let Time = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

PrintName("Abdullah");
