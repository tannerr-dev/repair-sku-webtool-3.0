
//Keeps you from refreshing on accident

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};

// Functionality of the metric calculator itself
let diags = 0
let comps = 0
let total = comps/15 + diags/30

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



function increase(){
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
    document.getElementById('percent').innerText = Math.round(total*100) +"%"
}


const decreaseComp = document.querySelector("#decreaseComp");
const totalcomps = document.querySelector("#totalComps");
const increaseComp = document.querySelector("#increaseComp");
const decreaseDiag = document.querySelector("#decreaseDiag");
const totaldiags = document.querySelector("#totaldiags");
const increaseDiag = document.querySelector("#increaseDiag");


increaseDiag.addEventListener("click",increase)
increaseComp.addEventListener("click",increase)
decreaseDiag.addEventListener("click", increase)
decreaseComp.addEventListener("click", increase)

 