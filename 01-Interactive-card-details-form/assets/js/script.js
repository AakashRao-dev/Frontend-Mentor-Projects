'use strict';

const form = document.getElementById('form');
const cardHolderName = document.getElementById('cardholder-name');
const cardNumber = document.getElementById('card-number');
const cardExpMonth = document.getElementById('card-exp-month');
const cardExpYear = document.getElementById('card-exp-year');
const cardCVC = document.getElementById('card-cvc');

// Success Page
const successPage = document.querySelector('.successPage-container');

// Cleave.js Code
new Cleave('#card-number', {
  creditCard: true,
  blocks: [4, 4, 4, 4],
  delimiter: '-',
});

new Cleave('#card-exp-month', {
  date: true,
  dateMin: '01',
  dateMax: '12',
  datePattern: ['m'],
});

new Cleave('#card-exp-year', {
  date: true,
  dateMin: '22',
  dateMax: '28',
  datePattern: ['y'],
});

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

// To show the error outline
function showError(input, message) {
  // border red
  let formControl = input.parentElement;
  if (input.parentElement.className === 'form-control') {
    formControl.className = 'form-control error';
  } else {
    input.closest('.form-control').className = 'form-control error';
  }

  // Not an optimal solution need to replace it afterwards
  if (formControl.querySelector('small')) {
    formControl.querySelector('small').textContent = message;
  } else {
    formControl = input.closest('.form-control');
    formControl.querySelector('small').textContent = message;
  }
}

// To change the elements on the dom if it's correct
function showSuccess() {
  form.remove();
  showSuccessPage();
}

// To add the display page to the dom
function showSuccessPage() {
  successPage.style.display = 'block';
}

// To fetch the fieldname from the label
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// To check if the input is empty or not
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess();
    }
  });
}

// Selecting form
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([
    cardHolderName,
    cardNumber,
    cardExpMonth,
    cardExpYear,
    cardCVC,
  ]);
});
