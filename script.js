// Get elements
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let timer = null;
let seconds = 0;

// Format time as HH:MM:SS
function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

// Start timer
startBtn.addEventListener('click', () => {
  if (timer) return; // already running

  timer = setInterval(() => {
    seconds++;
    display.textContent = formatTime(seconds);
  }, 1000);
});

// Pause timer
pauseBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

// Reset timer
resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  display.textContent = '00:00:00';
});
