// get dom hook into the notice DIV via its ID
// make a setTimeout that has ...
// 1. callback function that removes the notice DIV from the DOM
// 2. a delay of 5 seconds
const maintenanceNotice = document.getElementById("maintenance-notice");


setTimeout(()=> {
    maintenanceNotice.remove()
},5000
);

// SET INTERVAL
let secondsRemaining = 15;

let countdownInterval = setInterval(function(){
    secondsRemaining--;
    console.log(secondsRemaining);
}, 1000
);