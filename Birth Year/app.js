function triggerMode(){
    const currentYear = 2024
    const year = parseFloat(document.getElementById('year').value)
    const birthYear = currentYear - year
    
    
    document.getElementById('res').textContent = birthYear

}