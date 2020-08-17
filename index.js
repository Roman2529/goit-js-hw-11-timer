const refs = {
  secsRef: document.querySelector('[data-value="secs"]'),
  minsRef: document.querySelector('[data-value="mins"]'),
  hoursRef: document.querySelector('[data-value="hours"]'),
  daysRef: document.querySelector('[data-value="days"]'),
};

const timer = {
  start() {
    const startTime = new Date("Oct 31, 2020");
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      timerGeneral(deltaTime);
    }, 1000);
  },
};
timer.start();
let days;
let hours;
let mins;
let secs
function timerGeneral(time) {
  days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return timerValue();
};
function timerValue() {
  refs.secsRef.textContent = secs;
  refs.minsRef.textContent = mins;
  refs.hoursRef.textContent = hours;
  refs.daysRef.textContent = days;
};


function pad(value) {
  return String(value).padStart(2, "0");
}
