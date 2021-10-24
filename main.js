// function PrintName  (name) {
//   console.log(name);
// };

let PrintName = (name) => {
  console.log(name);
};
PrintName("Abdulmajeed");
let running = () => {
  let i = 1;
  setInterval(function text() {
    let c = document.getElementById("counter");
    let date = new Date();
    c.innerHTML = date.toLocaleString();
  }, 1000);
};
running();
