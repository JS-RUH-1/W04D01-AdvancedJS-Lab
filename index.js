// Abdulsalam Aldawsari - AdvancedJS-Lab 2021/10/4

/*Part 1*/
function printName(name){
console.log("Name: ",name)
}
printName("Abdullah");
/*Part 2*/
const printNameA = (name)=>console.log("Name: ",name);
printNameA("Mohammed")

/*Timing Event  */
let timediv = document.getElementById("time");

const myTime = ()=>{

  let date = new Date;
  let  seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let AMPM="";

  (hour>12)?(hour -= 12,AMPM="PM"):AMPM="AM";
  (hour==0) ? (hour = 12):""


  timediv.innerHTML = hour+":"+minutes+":"+seconds+" "+AMPM
}

setInterval(myTime,1000)




