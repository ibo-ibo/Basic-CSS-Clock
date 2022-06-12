"use strict";

const hour = document.querySelector(".hour-hand");
const minute = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand");

const setTime = function () {
  const time = new Date();

  const seconds = time.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  const minutes = time.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;

  const hourDegrees = (minutes / 12) * 360 + 90;

  second.style.transform = `rotate(${secondsDegrees}deg)`;
  minute.style.transform = `rotate(${minutesDegrees}deg)`;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
};
setInterval(setTime, 1000);
