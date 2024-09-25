function triggerMode(){
    const celsius = parseFloat(document.getElementById('c').value)
    const Fahrenheit = (celsius*9/5)+32
    
    
    document.getElementById('res').textContent = Fahrenheit

}