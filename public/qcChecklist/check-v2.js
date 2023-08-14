let list = document.getElementsByClassName('chk');

// let i=0;
// function chkNext(){


//     list[i].checked=true;
//     i++
    
// }

// function resetChk(){
//     i=0
// }


function chkNext(){
    for(let i=0; i<list.length; i++){
        if (!list[i].checked){
            list[i].checked = true;
            break; 
        }
    }
}