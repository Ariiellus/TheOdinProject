let num1 = '';
let num2 = 0;
let operator = null;

const display = document.getElementById('input');
const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
let result;

console.log(num1);
console.log(operator);
console.log(num2);
console.log(result);

function assignNum1() {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (operator === null) {
        num1 += button.textContent;
        display.textContent = num1;
      }
      buttons.forEach(b => b.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
}

function results(num1, operator, num2) {
  switch (operator) {
    case 'add':
      result = Number(num1) + Number(num2);
      break;
    case 'sub':
      result = Number(num1) - Number(num2);
      break;
    case 'mul':
      result = Number(num1) * Number(num2);
      break;
    case 'div':
      result = Number(num1) / Number(num2);
      break;
  }
  return result;
}