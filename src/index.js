class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.rootSelector = document.querySelector(selector);
    this.refs = {
      days: this.rootSelector.querySelector('[data-value="days"]'),
      hours: this.rootSelector.querySelector('[data-value="hours"]'),
      minutes: this.rootSelector.querySelector('[data-value="mins"]'),
      seconds: this.rootSelector.querySelector('[data-value="secs"]'),
    };
  }

  init() {
    setInterval(() => {
      const time = this.targetDate - Date.now();

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      this.refs.days.textContent = days < 10 ? `0${days}` : days;
      this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
      this.refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
      this.refs.seconds.textContent = secs < 10 ? `0${secs}` : secs;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 23, 2021'),
});

document.addEventListener('loadstart', timer.init());
