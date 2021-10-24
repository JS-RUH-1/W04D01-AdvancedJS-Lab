

//Q1: ORIGINAL FUNCTION
function PrintName(input){
    console.log(input);
}

//Q2: ARROW VERSION
let printName = input => {console.log(input)}


//Q3: ASYNCHRONOUSITY: 
setInterval(()=>{
    let d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    document.getElementById('time').innerHTML=hours+":"+minutes+":"+seconds
},1000);