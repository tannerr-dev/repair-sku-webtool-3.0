let previewWindow = document.querySelector("#previewWindow")

let linkOne = document.querySelector("#linkOne");

linkOne.addEventListener("click", () => {
    previewWindow.src = "https://docs.google.com/spreadsheets/d/1QWAtBXLOKeDpjaW9q5daK24EPQ1n5tMv1nF6aPYz7oE/edit#gid=0"
})

document.querySelector("#linkTwo").addEventListener("click", () => {
    previewWindow.src = "https://docs.google.com/document/d/1m1W44hs0Y4cvLv46KUmCSt06B6PYKW7-TAfFFckMJcY/edit#heading=h.jnc1k8u84qmm";
})

document.querySelector("#linkThree").addEventListener("click", () => {
    previewWindow.src = "https://docs.google.com/spreadsheets/d/1VDzrADBtunwB1Bn-p3nauT7IvfKTaVsmKzwAcXCKoMw/edit#gid=0";
})

document.querySelector("#linkFour").addEventListener("click", () => {
    previewWindow.src = "ProcessDocButton.html";
})


document.querySelector("#linkFive").addEventListener("click", () => {
    previewWindow.src = "https://docs.google.com/forms/d/e/1FAIpQLSf68-JyajMRSK1xpVgGjczLrQw5Z48YpBrp3-_jJAOu3GkYxw/viewform";
})

document.querySelector("#linkSix").addEventListener("click", () => {
    previewWindow.src = "ExtraButtons.html";
})

document.querySelector("#linkSeven").addEventListener("click", () => {
    previewWindow.src = "Tech Room Flow Chart (1).pdf";
})