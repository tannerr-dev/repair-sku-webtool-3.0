const input = document.querySelector('#input');

const output = document.querySelector('#output');
const subject = document.querySelector('#subject')

input.addEventListener('input', ()=>{
    console.log(input.value.split("\n"))
    let values = input.value.split("\n");
    let po = values[7].split(' ')[2];
    let ts = values[9];
    let qty = values[10];
    let tested = values[11];
    let failed = values[12];
    let desc = values[13];
    if (qty == undefined){
        qty="";
    } else {
        qty = values[10].split(' ')[0];
    }
    if (ts == undefined){
        ts="";
    }
    if (tested == undefined){
        tested = "";
    } else {
        tested = values[11].split(' ')[0];
    }
    if (failed == undefined){
        failed = "";
    } else {
        failed = values[12].split(' ')[0]
    }
    if (desc == undefined){
        desc = "";
    }
    subject.value = `PO${po}, REF#${values[1]}, ${values[8]}, VRMA Request`
    output.value = `Vendor: ${values[5]}\nSKU: ${values[8]}\nQty item RCPT: ${qty}\nQty Tested: ${tested}\nQty Failed: ${failed}\nMPN on the product: \nTesting Cone: ${ts}\nDescription of Issue: ${desc}`;
});

const copySubject = document.querySelector('#copySubject');
copySubject.addEventListener('click',()=>{
    navigator.clipboard.writeText(subject.value);
}) 

const copyEmail = document.querySelector('#copyEmail')
copyEmail.addEventListener('click', ()=>{
    navigator.clipboard.writeText(output.value);
})
const recipients = document.querySelector('#recipients')
const copyRecipients = document.querySelector('#copyRecipients')
copyRecipients.addEventListener('click', ()=>{
    navigator.clipboard.writeText(recipients.value);
})
// Vendor: 
// SKU: 
// Qty item RCPT: 
// Qty Tested: 
// Qty Failed: 
// MPN on the product: 
// Description of Issue: 
