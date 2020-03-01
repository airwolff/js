const secondHand = document.querySelector('.secondHand');
const minHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = (hour / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  s;
  console.log(seconds + ' ' + minutes + ' ' + hour);
}

setInterval(setDate, 1000);
