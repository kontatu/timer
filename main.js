const inputTime = document.getElementById("inputTime");
const nowTime = document.getElementById("nowTime");
const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");

let sec;
let timer;

setTime.addEventListener('click', function () {
    sec = inputTime.value;
    nowTime.textContent = `${sec}：セット完了です`
});

startTimer.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval('countDown()', 1000);
});

const countDown = function () {
    sec -= 1;
    nowTime.textContent = sec;
    if (sec === 0) {
        clearInterval(timer);
        alert('終了');
    };
};

stopTimer.addEventListener('click', function () {
    clearInterval(timer);
    nowTime.textContent = `${sec}：ストップ`;
});


