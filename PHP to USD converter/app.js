function triggerMode(){
    const phpAmount = parseFloat(document.getElementById('PHP').value)
    const conversionRate = parseFloat( 0.018)
    const phpToUSD  = phpAmount*conversionRate
    
    document.getElementById('Converted_Amount').textContent = ("Converted Amount:")
    document.getElementById('dollarSign').textContent = ("$")
    document.getElementById('res').textContent = phpToUSD.toFixed(2)
    document.getElementById('USD').textContent = ("USD")

}