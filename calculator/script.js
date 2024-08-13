let currentInput = '0';
let currentOperator = null;
let previousInput = null;

function updateDisplay() {
  document.getElementById('result').textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate();
  }
  previousInput = currentInput;
  currentInput = '0';
  currentOperator = operator;
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearResult() {
  currentInput = '0';
  currentOperator = null;
  previousInput = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function percentage() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    currentInput = '0';
  }
  updateDisplay();
}

function calculate() {
  if (currentOperator === null || previousInput === null) {
    return;
  }
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  switch (currentOperator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  currentOperator = null;
  previousInput = null;
  updateDisplay();
}

function toggleMode() {
  document.body.classList.toggle('light-mode');
}
