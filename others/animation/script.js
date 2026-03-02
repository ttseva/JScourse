'use strict';

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

let count = 0;
let idInterval;

const cycleAnimate = () => {
  count++;
  idInterval = requestAnimationFrame(cycleAnimate);

}
