const input = document.querySelector('#input');

const output = document.querySelector('#output');
const subject = document.querySelector('#subject')

input.addEventListener('input', ()=>{
    // console.log(input.value.split("\n"))
    const values = input.value.split("\n");
    const po = values[7].split(' ')[2];
    const qty = values[9].split(' ')[0];
    const tested = values[10].split(' ')[0];
    const failed = values[12].split(' ')[0];
    const desc = values[13]
    subject.value = `PO${po}, REF#${values[1]}, ${values[8]}, VRMA Request`
    output.value = `Vendor: ${values[5]}\nSKU: ${values[8]}\nQty item RCPT: ${qty}\nQty Tested: ${tested}\nQty Failed: ${failed}\nMPN on the product: \nDescription of Issue: ${desc}`;
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
