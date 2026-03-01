'use strict';

const timeout = 300
 
const input = document.getElementById('text');
const output = document.querySelector('p');

function debounce(func, ms) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

function handleOutput(input, output) {
  output.textContent = input.value;
}

const debouncedInput = debounce(handleOutput, timeout);

input.addEventListener('input', () => {
  debouncedInput(input, output)
});