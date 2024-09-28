const currentTime = () => {
    const element = document.querySelector("h1");


    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    //adding 0 before single digits
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    element.textContent = `${hours}:${minutes}:${seconds}`;
};
currentTime();
setInterval(currentTime, 1000);