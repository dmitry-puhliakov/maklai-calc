'use strict'

// find elements
const form = document.querySelector('.calc');
const inputs = document.querySelectorAll('.field__input');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const selectedOperation = document.getElementById('operation');
const clear = document.querySelector('.calc__btn button[type="button"]');
const result = document.querySelector('.calc__result');

// set operations
const operations = {
  add(x, y) {
    return x + y;
  },

  subtract(x, y) {
    return x - y;
  },

  multiply(x, y) {
    return x * y;
  },

  divide(x, y) {
    return x / y;
  },
};

// remove warning
[...inputs].forEach(input => {
  input.addEventListener('focus', event => {
    event.target.closest('.field').classList.remove('field--err')
  });
});

// on clear click
clear.addEventListener('click', event => {
  [...inputs].forEach(input => input.value = '');
  result.textContent = '0';
});

// on form submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // show warning if input is empty
  for (const input of inputs) {
    if (input.value === '') {
      input.closest('.field').classList.add('field--err');
      return;
    }
  }

  // show result
  result.textContent = Math.round(operations[selectedOperation.value](+num1.value, +num2.value));
});
