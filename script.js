var t = setInterval(calDate, 1000);

function calDate() {
    date_now = new Date();
    date_love = new Date("2022-11-16:17:47:00");

    seconds = Math.floor((date_now - (date_love))/1000);
    minutes = Math.floor(seconds/60);
    hours = Math.floor(minutes/60);
    days = Math.floor(hours/24);
    
    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    document.getElementById("counter-sec").innerText = seconds;
    document.getElementById("counter-min").innerText = minutes;
    document.getElementById("counter-hour").innerText = hours;
    document.getElementById("counter-days").innerText = days;
}