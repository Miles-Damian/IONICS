let historyArray = [];

function performOperation(operator) {
  // Get the input values
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let result = 0;
  
  // Switch statement for calculator operations
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert('Division by zero is not allowed!');
        return;
      }
      break;
    default:
      alert('Invalid operation');
      return;
  }

  // Display result
  document.getElementById('result').textContent = result;

  // Store the calculation in the array
  let calculation = `${num1} ${operator} ${num2} = ${result}`;
  historyArray.push(calculation);

  // Display the history
  displayHistory();
}

function displayHistory() {
  let historyElement = document.getElementById('history');
  historyElement.innerHTML = ''; // Clear current history
  
  // Loop through the history array and display each calculation
  for (let i = 0; i < historyArray.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = historyArray[i];
    historyElement.appendChild(listItem);
  }
}
