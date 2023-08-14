let parts = []
let format = {
    final:"",
}
let add = [];
let all = [];


function fuckFormat(){
    format.final="";
    parts = [];
    add = [];
    all = [];
    console.log('clear');
    document.getElementById('window').innerText = parts;
    navigator.clipboard.writeText(all)
}

function finisher(){
    all = format.final + add
    document.getElementById('window').innerText = all
    navigator.clipboard.writeText(all)
}

function copyAgain(){

    navigator.clipboard.writeText(all)
}



function formatCopy(){
    let tempParts = [...parts]
    if (tempParts.length > 1){
        let last = tempParts.pop();
        format.final = `Installed new${tempParts} and ${last}. `
    }else{
        format.final = `Installed new ${parts}. `
    }
    finisher();
}


function reserial(){
    let res = "Re-serialized motherboard to match previous motherboard's SN. ";
    add = add + res;
    finisher();
}

function replaceKeys(){
    let key = "Replaced key(s). ";
    add = add + key;
    finisher();
}
function tags(){
    let tags = "Transferred device tags to new bottom cover. ";
    add = add + tags;
    finisher();
}
function anoka(){
    let anoka = "Used Anoka provided parts. ";
    add = add + anoka;
    finisher();

}
function screws(){
    let screws = "Replaced missing screw(s). ";
    add += screws;
    finisher();
}
function hinges(){
    let hinges = "Tightened hinge screws. "
    add += hinges;
    finisher();
}


function declined(){
    parts = [];
    all = "Customer declined estimate."
    document.getElementById('window').innerText = "Customer declined estimate.";
    navigator.clipboard.writeText(all)
}










function bac(){
    parts.push(' Back Cover')
    formatCopy()

}
function bat(){
    parts.push(' Battery')
    formatCopy()

}
function cblBat(){
    parts.push(' Battery Cable')
    formatCopy()
}
function trim(){
    parts.push(' Trim Cover')
    formatCopy()

}
function bez(){
    parts.push(' Bezel')
    formatCopy()

}
function bot(){
    parts.push(' Bottom Cover')
    formatCopy()
}
function cam(){
    parts.push(' Camera Board')
    formatCopy()

}
function wfc(){
    parts.push(' World Facing Camera Board')
    formatCopy()

}
function cblCam(){
    parts.push(' Camera Cable')
    formatCopy()
}
function dau(){
    parts.push(' Daughterboard')
    formatCopy()
}
function dcj(){
    parts.push(' DC Jack')
    formatCopy()
}
function coo(){
    parts.push(' Fan')
    formatCopy()
}
function hng(){
    parts.push(' Hinge Set')
    formatCopy()
}
function kyb(){
    parts.push(' Keyboard')
    formatCopy()
}
function cblLcd(){
    parts.push(' LCD Cable')
    formatCopy()
}
function lcdPanel(){
    parts.push(' LCD Panel')
    formatCopy()
}
function lcdMod(){
    parts.push(' LCD Module')
    formatCopy()
}
function mic(){
    parts.push(' Microphone Board')
    formatCopy()
}
function cblMic(){
    parts.push(' Microphone Cable')
    formatCopy()
}
function mot(){
    parts.push(' Motherboard')
    formatCopy()
}
function plm(){
    parts.push(' Palmrest')
    formatCopy()
}
function spk(){
    parts.push(' Speaker Set')
    formatCopy()
}
function ssd(){
    parts.push(' SSD')
    formatCopy()
}
function sty(){
    parts.push(' Stylus Pen')
    formatCopy()
}
function tpd(){
    parts.push(' Touchpad')
    formatCopy()
}
function cblTpd(){
    parts.push(' Touchpad Cable')
    formatCopy()
}
function wif(){
    parts.push(' Wi-Fi Card')
    formatCopy()
}