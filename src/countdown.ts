const thonDate = new Date("2027-02-19T18:00:00").getTime();

const daysElement = document.getElementById("days")!;
const hoursElement = document.getElementById("hours")!;
const minutesElement = document.getElementById("minutes")!;
const secondsElement = document.getElementById("seconds")!;

function updateCountdown(): void {
  const now = new Date().getTime();
  const difference = thonDate - now;

  if (difference <= 0) {
    // THON Started! - Make say 'WE ARE DANCING! -- 0:00:00'
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString() + ":";
  hoursElement.textContent = hours.toString() + ":";
  minutesElement.textContent = minutes.toString() + ":";
  secondsElement.textContent = seconds.toString();
}

setInterval(updateCountdown, 1000);
updateCountdown();