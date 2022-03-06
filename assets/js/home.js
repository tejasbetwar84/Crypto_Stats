let time=60;
setInterval(() => {
    time--;
    document.querySelector('.nav__link--timer').textContent=time;
}, 1000);