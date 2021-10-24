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
    c.innerHTML = i++;
  }, 1000);
};
running();
