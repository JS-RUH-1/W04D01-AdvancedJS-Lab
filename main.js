const PrintName = (name) => console.log(name);


setInterval(() => {
    let today = new Date();
     document.getElementById("timenow").innerText = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric',hour12: true });
}, 1000);
