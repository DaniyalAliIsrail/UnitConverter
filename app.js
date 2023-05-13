const endDate = "29 May 2023 8:00 PM"
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");
var clock =() =>{
const end = new Date(endDate);
const now = new Date();
const diff = (end-now);
if(diff <0)return;
//converting into days
inputs[0].value= Math.floor(diff/1000/60/60/24);
//converting into hours
inputs[1].value= Math.floor(diff/1000/60/60) % 24;
//converting into Minutes
inputs[2].value= Math.floor(diff/1000/60) % 60;
//converting into seconds
inputs[3].value= Math.floor(diff/1000) % 60;
}
clock();
// function call in 1 second later
setInterval(() => {
      clock()
}, 1000);
