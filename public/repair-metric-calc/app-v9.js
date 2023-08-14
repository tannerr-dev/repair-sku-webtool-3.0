
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

increaseDiag.addEventListener("click",defeated)
increaseComp.addEventListener("click",defeated)
decreaseDiag.addEventListener("click", defeated)
decreaseComp.addEventListener("click", defeated)


function defeated(){
    if (total >= 1.5){
        boss.src = "./bossRes6.png";
    }
    else if (total >= 1.4){
        boss.src = "./bossRes5.png";
    }
    else if (total >= 1.3){
        boss.src = "./bossRes4.png";
    }
    else if (total >= 1.2){
        boss.src = "./bossRes3.png";
    }
    else if (total >= 1.1){
        boss.src = "./bossRes2.png";
    }
    else if(total >= 1.03){
        boss.src = "./bossRes1.png";
    }
    else if (total >= 1){

        boss.src = "./defeated3.0.png";
    }
    else{
        boss.src = "./boss3.0.png";
    }
}

// slect boss image////////////////
const boss = document.querySelector("#boss");

//shake ////////////////////////////////////////////////
var audio = new Audio('shorter-damage.mp3');
function playAudio() {
    audio.play()
}
const shake = [
    {transform: "rotate(5deg) scale(0.7)"},
    {transform: "rotate(-5deg) scale(1)"}
];
const grow = [
    {transform: "scale(1.2)"}
]
const timing = {
    duration: 200,
    iterations:1,
};

function hit(){
    if (total >=1 && total <= 1.04){
        boss.src = "./youWin.png";
        setTimeout(youWin, 1000)
    }
    if(total < 1){
        boss.src = "./bossExplos.png";
        setTimeout(explos, 250);
        boss.animate(shake, timing);
    }
};

function growing(){
    if (total < 1){
    boss.animate(grow, timing);
    }
};

function explos(){
    boss.src = "./boss3.0.png"
}
function youWin(){
    boss.src = "./defeated3.0.png";
}


//event listening for above buttons////////////////////////////////
increaseDiag.addEventListener("click",hit)
increaseComp.addEventListener("click",hit)
decreaseDiag.addEventListener("click", growing)
decreaseComp.addEventListener("click", growing)

//event listening for above buttons////////////////////////////////



//event listening for above buttons////////////////////////////////
increaseDiag.addEventListener("click", playAudio)
increaseComp.addEventListener("click", playAudio)


//event listening for above buttons//////////////

 