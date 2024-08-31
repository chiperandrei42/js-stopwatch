const timeCounter = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const restartBtn = document.getElementById('restartBtn');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const startTimer = () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

const stopTimer = () => {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

const restartTimer = () => {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    timeCounter.textContent = `00:00:00:00`
}

const update = () => {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, 0);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);
    timeCounter.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}