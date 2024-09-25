function triggerMode(){
    const name1 = document.getElementById('name1').value
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const addition = num1 + num2

    if(addition == 5){
        document.getElementById('setup').textContent = ('Setup')
    }
    else{
        document.getElementById('setup').textContent = ('Default')
    }
    
    
    document.getElementById('add').textContent = addition
    document.getElementById('nameResult').textContent = name1

}