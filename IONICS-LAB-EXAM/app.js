document.getElementById('discount_confirm').addEventListener("ionChange", selectFunction)

function selectFunction(){
    const discount_confirm = document.getElementById('discount_confirm').value

    if(discount_confirm == "Yes"){
        document.getElementById('discount_content').style.display = "block"
    }
    else{
         document.getElementById('discount_content').style.display = "none"
    }
}


function niggerMode(){
    const name_id = document.getElementById('name_id').value
    const product_id = document.getElementById('product_id').value
    const price_id = parseFloat(document.getElementById('price_id').value)
    const discount_code = document.getElementById('discount_code').value
    const discount_confirm = document.getElementById('discount_confirm').value

    document.getElementById('res_name').textContent = name_id
    document.getElementById('res_product').textContent = product_id
    document.getElementById('res_price').textContent = price_id
    
    document.getElementById('disContent').style.display = "block"

    
   if(discount_confirm == "Yes"){
    document.getElementById('discount_alert').style.display = "block"
   }
   else{
    document.getElementById('discount_alert').style.display = "none"
   }

    if(discount_code.trim() != "" && discount_code == "DISCOUNT10"){
        
        document.getElementById("res_code").textContent = discount_code
        document.getElementById('res_total_amount').textContent = (price_id*0.10).toFixed(2)
    }
    else if(discount_code != "DISCOUNT10"){
        document.getElementById("res_code").textContent = "Invalid Discount Code"
        document.getElementById('res_total_amount').textContent = price_id.toFixed(2)
    }

}