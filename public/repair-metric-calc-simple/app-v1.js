
//Keeps you from refreshing on accident

// window.onbeforeunload = function() {
//     return "Data will be lost if you leave the page, are you sure?";
// };

// Functionality of the metric calculator itself
let diags = 0
let comps = 0
let total = comps/15 + diags/30
let time;
function plusOneComp() {
    // add one
    comps = comps +1;
    //update total
    total = comps/15 + diags/30

    document.getElementById('percent').innerText = Math.round(total*100) +"%"
    document.getElementById('totalcomps').innerText = "Comps: " + comps
}
function minusOneComp() {
    // add one
    comps = comps -1;
    //update total
    total = comps/15 + diags/30

    document.getElementById('totalcomps').innerText ="Comps: " + comps
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
}
function plusOneDiag() {
    // add one
    diags = diags +1;
    //update total
    total = comps/15 + diags/30
    document.getElementById('totaldiags').innerText = "Diags: " + diags
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
}
function minusOneDiag() {
    // add one
    diags = diags -1;
    //update total
    total = comps/15 + diags/30
    document.getElementById('totaldiags').innerText = "Diags: " + diags
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
}

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
   total = comps/15 + diags/30
   document.getElementById('percent').innerText = Math.round(total*100) +"%"
   document.getElementById('totalcomps').innerText = "Comps: " + comps
   increase();
   updateBars();
}
function enterDiags(){
    enterD = prompt("How many diags have you done?")
    while(isNaN(parseInt(enterD))){
        if (enterD === ''){
            return
        } else if (enterD === null){
            return
        }
        enterD = prompt("Try again buddy...need a number..")
    }
    diags = parseInt(enterD)
    total = comps/15 + diags/30
    document.getElementById('totaldiags').innerText = "Diags: " + diags
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
    increase();
    updateBars();
}


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

function updateBars(){
    red.style.flexGrow = redBar;
    green.style.flexGrow = greenBar;
    superGreen.style.flexGrow = superGreenBar;
}



function inc(){
    if(total > 1.01){
        redBar = 0;
        greenBar = 1 - (total - 1);
        superGreenBar = total -1;
    }
    else if(total >= 1){
        greenBar = total;
        redBar = 0;
        superGreenBar = 0;
    } else if(total <= 0){
        redBar = 1;
        greenBar = 0;
    }
    else{
        redBar = 1 - total;
        greenBar = total;
        superGreenBar = 0;
    }
    updateBars();
    console.log(total)
    document.getElementById('percent').innerText = Math.round(total*100) +"%";
    updateTime();
    document.getElementById('time').innerText = time;

}


const decreaseComp = document.querySelector("#decreaseComp");
const totalcomps = document.querySelector("#totalComps");
const increaseComp = document.querySelector("#increaseComp");
const decreaseDiag = document.querySelector("#decreaseDiag");
const totaldiags = document.querySelector("#totaldiags");
const increaseDiag = document.querySelector("#increaseDiag");


increaseDiag.addEventListener("click",inc)
increaseComp.addEventListener("click",inc)
decreaseDiag.addEventListener("click", inc)
decreaseComp.addEventListener("click", inc)

 

//time-calc
// 9      0
// 10   13%
// 11   25%
// 12   38%
// 1     50%
// 2     63%
// 3     75%
// 4     88%
// 5     100%

// 9 + (percent * 8) //this is the general concept

//question is how to rollover the minutes into hours and from noon to one


function updateTime(){
    let t = total *8
    let hr = Math.trunc(t);
 
    let min = Math.round((t%1) * 60);
    if (min <10){
        min = "0"+ min;
    }
 
    time = `${9 + hr}:${min}`;
}
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