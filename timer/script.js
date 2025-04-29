const daysE1=document.getElementById("days");
const hoursE1=document.getElementById("hours");
const minsE1=document.getElementById("mins");
const secondsE1=document.getElementById("seconds");


const newYears="2025-01-10";

function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();

    const seconds=(newYearsDate-currentDate)/1000;

    const days=Math.floor(seconds/3600 /24);

    const hours = Math.floor(seconds/3600) %24;

    const mins=Math.floor(seconds/60) %60;

    const remseconds=Math.floor(seconds)%60;

   
   daysE1.innerHTML=days;
   hoursE1.innerHTML=formatTime(hours);
   minsE1.innerHTML=formatTime(mins);
   secondsE1.innerHTML=formatTime(remseconds);
    
}
//countdown();
function formatTime(time){
    return time <10 ? `0${time}`:time;
}


setInterval(countdown,1000);
