//timer
const timerTime = 25 * 60 * 1000 + Date.now();

//1.осталось времени
function getTimeRemaining(endtime) {

    const t = endtime - Date.now();

    const minutes = Math.floor((t/ 1000 / 60) % 60);
    const seconds = Math.floor((t/1000) % 60);

    return {
        'total' : t,
        'minutes' : minutes,
        'seconds' : seconds
    }
}

//2.устанавливаем таймер
function setTimer(selector, endtime) {
    const timer = document.querySelector(selector);
    const minutes = timer.querySelector('.minutes');
    const seconds = timer.querySelector('.seconds');

    //обновляем каждую секунду
    const timerInterval = setInterval(updateTimer, 1000);

    //3.обновляем таймер
    function updateTimer() {
        const t = getTimeRemaining(endtime);

        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timerInterval);
        }

    }

}

//запускаем таймер
const timerBtn = document.querySelector('.timer-btn');
timerBtn.addEventListener('click', (e) => {
    e.currentTarget.innerHTML = "pause";
    setTimer('.timer', timerTime);
})


