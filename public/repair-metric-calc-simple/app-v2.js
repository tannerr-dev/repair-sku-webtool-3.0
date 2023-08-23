//Keeps you from refreshing on accident
window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};

// Functionality of the metric calculator itself
let diags = 0;
let comps = 0;
let total = comps/15 + diags/30;
let time;

function plusOneComp() {
    comps += 1;
    updateComps();
};
function minusOneComp() {
    comps -= 1;
    updateComps();
};
function updateComps(){
    total = comps/15 + diags/30;
    document.getElementById('totalcomps').innerText ="Comps: " + comps;
};
function plusOneDiag() {
    diags += 1;
    updateDiags();
};
function minusOneDiag() {
    diags -= 1;
    updateDiags();
};
function updateDiags(){
    total = comps/15 + diags/30;
    document.getElementById('totaldiags').innerText = "Diags: " + diags;
};

//enter values manually when clicked
  function enterComps() {
    enterC = prompt("How many completes have you done?")
    while(isNaN(parseInt(enterC))){
        if (enterC === ''){
            return
        } else if(enterC === null){
            return
        }
    enterC = prompt('Try again buddy...number pleaseeee')
   }
   comps = parseInt(enterC)
   updateComps();
   buttonClick();
};
function enterDiags(){
    enterD = prompt("How many diags have you done?");
    while(isNaN(parseInt(enterD))){
        if (enterD === ''){
            return
        } else if (enterD === null){
            return
        };
        enterD = prompt("Try again buddy...need a number..");
    };
    diags = parseInt(enterD);
    updateDiags()
    buttonClick();
};

function updatePercent(){
    document.getElementById('percent').innerText = Math.round(total*100) +"%";
};
//NEW STATUS BAR NEW STATUS BAR NEW STATUS BAR NEW STATUS BAR 
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const superGreen = document.querySelector("#superGreen");
const down = document.querySelector("#down");
const up = document.querySelector("#up");

// let total = 0;
let greenBar= 0;
let redBar = 1;
let superGreenBar = 0;

red.style.flexGrow = redBar;
green.style.flexGrow = greenBar;
superGreen.style.flexGrow = superGreenBar;

function buttonClick(){
    if (total > 1.01){
        redBar = 0;
        greenBar = 1 - (total - 1);
        superGreenBar = total -1;
    } else if (total >= 1){
        greenBar = total;
        redBar = 0;
        superGreenBar = 0;
    } else if (total <= 0){
        redBar = 1;
        greenBar = 0;
    } else {
        redBar = 1 - total;
        greenBar = total;
        superGreenBar = 0;
    };
    red.style.flexGrow = redBar;
    green.style.flexGrow = greenBar;
    superGreen.style.flexGrow = superGreenBar;
    updatePercent();
    updateTime();
    document.getElementById('time').innerText = time;
};

const decreaseComp = document.querySelector("#decreaseComp");
const totalcomps = document.querySelector("#totalComps");
const increaseComp = document.querySelector("#increaseComp");
const decreaseDiag = document.querySelector("#decreaseDiag");
const totaldiags = document.querySelector("#totaldiags");
const increaseDiag = document.querySelector("#increaseDiag");

increaseDiag.addEventListener("click",buttonClick);
increaseComp.addEventListener("click",buttonClick);
decreaseDiag.addEventListener("click", buttonClick);
decreaseComp.addEventListener("click", buttonClick);

//time functions 
function updateTime(){
    let t = total *8;
    let h = Math.trunc(t) + 9;
    let hr;
    let min = Math.round((t%1) * 60);
    if (min <10){
        min = "0"+ min;
    };
    if (h > 12){
        hr = h-12;
    } else {
        hr = h;
    };
    time = `${hr}:${min}`;
};
//ex. 30% of 8
// .3 * 8 = 2.4 hours
// 2.4 hours split into 2 and .4
// 9am + 2 and .4*60  for minutes
// function NumToTime(num) { 
//     var hours = Math.floor(num / 60);  
//     var minutes = num % 60;
//     if (minutes + ''.length < 2) {
//       minutes = '0' + minutes; 
//     }
//     return hours + ":" + minutes;
// }