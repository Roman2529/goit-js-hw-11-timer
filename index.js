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

function timerGeneral(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.secsRef.textContent = secs;
  refs.minsRef.textContent = mins;
  refs.hoursRef.textContent = hours;
  refs.daysRef.textContent = days;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
