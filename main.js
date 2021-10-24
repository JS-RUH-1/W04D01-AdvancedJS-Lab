//old function

function printName(name) {
    return name
}

console.log(printName("Amjad"))

// Covorted arrow fucntin 
const PrintArrw = (name) => {
    return name
}

console.log(PrintArrw("Amajd"))



// event Time
var time = setInterval(myTime, 1000);

function myTime() {
    var date = new Date();
    var timeToSting = date.toLocaleTimeString();
    document.getElementById("timer").innerHTML = timeToSting;
}