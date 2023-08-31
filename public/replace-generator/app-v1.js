let parts = []
let all;


function fuckFormat(){
    parts = [];
    all="";
    document.getElementById('window').innerText = parts
    navigator.clipboard.writeText(parts)
}


function formatCopy(){
    all = `Replace: [ ${parts} ]`;
    document.getElementById('window').innerText = all
    navigator.clipboard.writeText(all)
    copied();
}



function copyAgain(){
    navigator.clipboard.writeText(all)
    copied();
}

function copied(){
    let text = document.querySelector("#copied");
    text.classList.add("fade-in");
    setTimeout(()=>{
        text.classList.remove("fade-in");
    }, 1000);
}












function bac(){
    parts.push(' Back Cover ')
    formatCopy()

}
function bat(){
    parts.push(' Battery ')
    formatCopy()

}
function cblBat(){
    parts.push('  Battery Cable ')
    formatCopy()
}
function trim(){
    parts.push('  Trim Cover ')
    formatCopy()

}
function bez(){
    parts.push('  Bezel ')
    formatCopy()

}
function bot(){
    parts.push(' Bottom Cover ')
    formatCopy()
}
function cam(){
    parts.push(' Camera Board ')
    formatCopy()

}
function wfc(){
    parts.push(' World Facing Camera Board ')
    formatCopy()

}
function cblCam(){
    parts.push(' Camera Cable ')
    formatCopy()
}
function dau(){
    parts.push(' Daughterboard ')
    formatCopy()
}
function dcj(){
    parts.push(' DC Jack ')
    formatCopy()
}
function coo(){
    parts.push(' Fan ')
    formatCopy()
}
function hng(){
    parts.push(' Hinge Set ')
    formatCopy()
}
function kyb(){
    parts.push(' Keyboard ')
    formatCopy()
}
function cblLcd(){
    parts.push(' LCD Cable ')
    formatCopy()
}
function lcdPanel(){
    parts.push(' LCD Panel ')
    formatCopy()
}
function lcdMod(){
    parts.push(' LCD Module ')
    formatCopy()
}
function mic(){
    parts.push(' Microphone Board ')
    formatCopy()
}
function cblMic(){
    parts.push(' Microphone Cable ')
    formatCopy()
}
function mot(){
    parts.push(' Motherboard ')
    formatCopy()
}
function plm(){
    parts.push(' Palmrest ')
    formatCopy()
}
function spk(){
    parts.push(' Speaker Set ')
    formatCopy()
}
function ssd(){
    parts.push(' SSD ')
    formatCopy()
}
function sty(){
    parts.push(' Stylus Pen ')
    formatCopy()
}
function tpd(){
    parts.push(' Touchpad ')
    formatCopy()
}
function cblTpd(){
    parts.push(' Touchpad Cable ')
    formatCopy()
}
function wif(){
    parts.push(' Wi-Fi Card ')
    formatCopy()
}