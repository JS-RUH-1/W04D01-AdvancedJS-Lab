/*function printName ( name ){
    console.log ( name )
}*/

let printName = (name) => console.log ( name );


let updateTime = () => {
    let timeText = document.getElementById("time");
    let today = new Date();
    timeText.innerText = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

setInterval(updateTime, 1000);