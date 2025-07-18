const endDate = "1 January 2026 00:00";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    console.log(end);
    console.log(now);
    const diff = (end-now)/1000;
    console.log(diff);
    if (diff < 0) return;
    inputs[0].value = (Math.floor(diff/3600/24)) //days
    inputs[1].value = (Math.floor((diff/3600)%24)) //hours
    inputs[2].value = (Math.floor((diff/60)%(60))) //minutes
    inputs[3].value = (Math.floor((diff)%(60)))  //seconds
}
clock();
setInterval(
    () =>{
        clock()
    },
    1000
)