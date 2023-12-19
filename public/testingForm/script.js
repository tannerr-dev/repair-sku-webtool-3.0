const input = document.querySelector('#input');
const format = document.querySelector('#format');
const output = document.querySelector('#output');
const subject = document.querySelector('#subject')


format.addEventListener('click', ()=>{
    console.log(input.value.split("\n"))
    const values = input.value.split("\n");
    const po = values[7].split(' ')[2];
    subject.value = `PO${po}, REF#${values[1]}, ${values[8]}, VRMA Request`
    output.value = `Vendor: ${values[5]}\nSKU: ${values[8]}\nQty item RCPT: \nQty Tested: \nQty Failed: \nMPN on the product: \nDescription of Issue: `;
});

const copySubject = document.querySelector('#copySubject');
copySubject.addEventListener('click',()=>{
    navigator.clipboard.writeText(subject.value);
}) 

const copyEmail = document.querySelector('#copyEmail')
copyEmail.addEventListener('click', ()=>{
    navigator.clipboard.writeText(output.value);
})
// Vendor: 
// SKU: 
// Qty item RCPT: 
// Qty Tested: 
// Qty Failed: 
// MPN on the product: 
// Description of Issue: 
