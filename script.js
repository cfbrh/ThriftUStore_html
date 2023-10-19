let nowVar = new Date();

let time = document.getElementById("now");

const options = {
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    timeZoneName: 'short' 
};

const formattedTime = new Intl.DateTimeFormat('en-US', options).format(nowVar);
time.innerHTML = formattedTime;
