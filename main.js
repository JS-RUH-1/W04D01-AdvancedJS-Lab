// Part 1:

function printName(str){
    console.log(str);
}

printName("Khaled");

// ARROW
let arrowPrint = (str) => {console.log(str)};
arrowPrint("Arrow");


// Part 2

let myVar = setInterval(myTimer, 1000);

function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.querySelector(".time").innerHTML = t;
}