// Calculator function to handle basic arithmetic operations
function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = '';
  
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = 'Please enter valid numbers.';
      return;
    }
  
    // Perform the calculation using if-else
    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'subtract') {
      result = num1 - num2;
    } else if (operation === 'multiply') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      if (num2 === 0) {
        result = 'Error: Division by zero is not allowed!';
      } else {
        result = num1 / num2;
      }
    }
  
    // Display the result of the calculation
    document.getElementById('result').innerHTML = 'Result: ' + result;
  }
  
  // Function for the for loop
  function forLoop() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = '';
  
    // Validate if inputs are numbers
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = 'Please enter valid numbers.';
      return;
    }
  
    // If num1 is greater than num2, return a message
    if (num1 > num2) {
      result = 'The first number must be less than or equal to the second number.';
    } else {
      // For loop to print numbers between num1 and num2
      for (let i = num1; i <= num2; i++) {
        result += i + ' ';
      }
    }
  
    // Display the result
    document.getElementById('result').innerHTML = 'For Loop: ' + result;
  }
  
  // Function for the while loop
  function whileLoop() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = '';
  
    // Validate if inputs are numbers
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = 'Please enter valid numbers.';
      return;
    }
  
    // If num1 is greater than num2, return a message
    if (num1 > num2) {
      result = 'The first number must be less than or equal to the second number.';
    } else {
      let i = num1;
      // While loop to print numbers between num1 and num2
      while (i <= num2) {
        result += i + ' ';
        i++;
      }
    }
  
    // Display the result
    document.getElementById('result').innerHTML = 'While Loop: ' + result;
  }
  
  // Function to compare two numbers using if-else statements
  function compareNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
  
    // Validate if inputs are numbers
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = 'Please enter valid numbers.';
      return;
    }
  
    let result = '';
  
    // If-else logic to compare the two numbers
    if (num1 > num2) {
      result = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
      result = `${num1} is less than ${num2}`;
    } else {
      result = `${num1} is equal to ${num2}`;
    }
  
    // Display the result
    document.getElementById('result').innerHTML = result;
  }
  