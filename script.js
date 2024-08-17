document.getElementById('startButton').addEventListener('click', startTimers);

function startTimers() {
    let timerElement = document.getElementById('timer');
    let fase = document.getElementById('fase');
    let times = [20, 160, 20];  // 各タイマーの秒数
    let currentTimer = 0;

    function startTimer(seconds) {
        let remainingTime = seconds;
        timerElement.textContent = `${remainingTime}秒`;
        fase.textContent = times[currentTimer];

        let interval = setInterval(() => {
            remainingTime--;
            timerElement.textContent = `${remainingTime}秒`;

            if (remainingTime <= 0) {
                clearInterval(interval);
                currentTimer++;
                if (currentTimer < times.length) {
                    startTimer(times[currentTimer]);
                    fase.textContent = times[currentTimer];
                }
            }
        }, 1000);
    }

    startTimer(times[currentTimer]);
}