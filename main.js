
//Anonymous function
// let PrintName = function(name){
// console.log(name);
// };

//arrow function

let PrintName = (name) => console.log(name);


setInterval(() => {
    const timeObj = new Date();
    const hours = timeObj.getHours();
    const hoursIn12Hr = hours >= 13 ? hours % 12 : hours;
    const minutes = timeObj.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
  
    // set the times and the date in html
    document.getElementById("idtime").innerHTML =
      (hoursIn12Hr < 10 ? "0" + hoursIn12Hr : hoursIn12Hr) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      " " +
      `<span id="am-pm">${ampm}</span>`;
  
  }, 1000);