function triggerMode(){
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const addition = num1 + num2
    const division = num1/num2
    const multiplication = num1*num2
    const subtraction = num1-num2
    
    document.getElementById('add').textContent = addition
    document.getElementById('division').textContent = division
    document.getElementById('mult').textContent = multiplication
    document.getElementById('sub').textContent = subtraction
}