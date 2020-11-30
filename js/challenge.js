const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
let span = document.createElement("span");

let time = 0;
let isPaused = false;

minus.addEventListener("click", function() {
    counter.innerText = `${time --}`;
});