// Phone Quantity & Price Update
document.getElementById('phone-quantity-plus').addEventListener('click',function(){
    const newPhoneQuantity = updateQuantity(true ,'phone-quantity');
    SetTheValue('phone-quantity' , newPhoneQuantity);
    const newPrice = priceCalculate(1219 , newPhoneQuantity);
    SetTheText('phone-price' , newPrice);
    totalPriceCalculate();

});

document.getElementById('phone-quantity-minus').addEventListener('click',function(){
    const newPhoneQuantity = updateQuantity(false ,'phone-quantity');
    if (newPhoneQuantity === 0) {
            alert('Please Make sure your Quantity');
            
            return;
        }
    SetTheValue('phone-quantity' , newPhoneQuantity);
    const newPrice = priceCalculate(1219 , newPhoneQuantity);
    SetTheText('phone-price' , newPrice);
    totalPriceCalculate();
});

//-----------------------------------------

// Case Quantity & Price Update

document.getElementById('case-quantity-plus').addEventListener('click',function(){
    const newCaseQuantity = updateQuantity(true ,'case-quantity');
    SetTheValue('case-quantity' , newCaseQuantity);
    const newPrice = priceCalculate(59 , newCaseQuantity);
    SetTheText('case-price' , newPrice);
    totalPriceCalculate();

});

document.getElementById('case-quantity-minus').addEventListener('click',function(){
    const newCaseQuantity = updateQuantity(false ,'case-quantity');
    if (newCaseQuantity === 0) {
            alert('Please Make sure your Quantity');
            return;
        }
    SetTheValue('case-quantity' , newCaseQuantity);
    const newPrice = priceCalculate(59 , newCaseQuantity);
    SetTheText('case-price' , newPrice);
    totalPriceCalculate();
});