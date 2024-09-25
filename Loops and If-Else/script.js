// Function for the for loop
function showForLoop() {
    let result = '';
  
    // For loop: print numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
      result += i + ' '; // Append the result to a string
    }
  
    // Display the result
    document.getElementById('result').innerHTML = 'For Loop: ' + result;
  }
  
  // Function for the while loop
  function showWhileLoop() {
    let result = '';
    let i = 1;
  
    // While loop: print numbers from 1 to 5
    while (i <= 5) {
      result += i + ' ';
      i++;
    }
  
    // Display the result
    document.getElementById('result').innerHTML = 'While Loop: ' + result;
  }
  
  // Function for if-else statement
  function showIfElse() {
    let number = Math.floor(Math.random() * 21) - 10; // Generate a random number between -10 and 10
    let result = '';
  
    // If-Else statement
    if (number > 0) {
      result = 'The number ' + number + ' is positive.';
    } else if (number < 0) {
      result = 'The number ' + number + ' is negative.';
    } else {
      result = 'The number is zero.';
    }
  
    // Display the result
    document.getElementById('result').innerHTML = result;
  }
  