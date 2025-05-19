
// setTimeout 

// console.log (1);
// console.log (2);
// console.log (3);
// console.log (4);
// console.log (5);
// console.log (6);

// setTimeout (() =>{
//     console.log (7);
// }, 4000) ;




// setInterval (()=>{});
let count = 0;
const counterDisplay = document.getElementById("counter-display");
const colors = [
    "red", "blue", "green", "purple",
   
];

if (counterDisplay) {
    setInterval(() => {
        counterDisplay.textContent = count;
        counterDisplay.style.color = colors[count % colors.length];
        count++;
    }, 1000);
} else {
    console.error('Element with id "counter-display" not found.');
}
