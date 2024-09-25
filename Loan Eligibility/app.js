function Mode(){
    const loan = document.getElementById('loan').value
    let income = parseFloat(document.getElementById('income').value)
    const cb1 = document.getElementById('cb1')
    const debt = 70/100

    if(loan == 'personal'){
        if(cb1.checked){
            income = (income*10)*debt
            document.getElementById('res').innerHTML = income
        }
        else{
            income = (income*10)
            document.getElementById('res').innerHTML = income
        }
    }

    else if(loan == 'home'){
        if(cb1.checked){
            income = (income*20)*debt
            document.getElementById('res').innerHTML = income
        }
        else{
            income = (income*20)
            document.getElementById('res').innerHTML = income
        }
    }

    else if(loan == 'auto'){
        if(cb1.checked){
            income = (income*15)*debt
            document.getElementById('res').innerHTML = income
        }
        else{
            income = (income*15)
            document.getElementById('res').innerHTML = income
        }
    }
    
    


}