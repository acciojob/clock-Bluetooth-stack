//your JS code here. If required.
// const time = document.querySelector("#time");
// const date = document.querySelector("#date");
const dateAndTime = document.querySelector("#timer");

let day = new Date();

// console.log(day.toLocaleString());
let now = day.toLocaleString();
dateAndTime.innerHTML = `${now}`;