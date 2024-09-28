function submitOrder(){
    let delivery_address = document.getElementById('delivery_address').value
    let payment_method = document.getElementById('payment_method').value
    let saved_payment = document.getElementById('saved_payment')
    let food_price = document.getElementById('food_price').value


    //Condition if food price has inputs
    if(food_price.trim() == ""){
        document.getElementById('food_has_value').style.display ='none';
    }
    else{
        document.getElementById('food_has_value').style.display ='inline';
        document.getElementById('food_price_res').textContent = food_price;
    }

    // Condition if there is an input on address
    if(delivery_address != ""){
        document.getElementById('res').style.display = 'block';
        document.getElementById('address_res').textContent = delivery_address;
        document.getElementById('payment_res').textContent = payment_method;
    }

    // Condition for Saving Payment
    if(saved_payment.checked){
        document.getElementById('saved_payment_res').textContent = ('Payment Method will be saved.');
    }
    else{
        document.getElementById('saved_payment_res').textContent = ('Payment Method will not be saved.');
    }

    // Condition for Payment method if it is "Cash on Hand"
    if(payment_method == 'Cash on Hand'){
        document.getElementById('payment_res').style.display = 'none';
        document.getElementById('payment_label').style.display = 'none';
        document.getElementById('cash_show').style.display = 'inline';
    }
    else{
        document.getElementById('payment_res').style.display = 'inline';
        document.getElementById('payment_label').style.display = 'inline';
        document.getElementById('cash_show').style.display = 'none';
    }

}

