// Phone Price And Quantity Update

// Plus Phone 	Addition

document.getElementById('phone-quantity-plus').addEventListener('click',function(){
    const previousPhoneQuantity = inputValue('phone-quantity');
    const newPhoneQuantity = previousPhoneQuantity + 1;
    SetNewValue('phone-quantity' , newPhoneQuantity);

    //  Set The New Price

    const previousPhonePrice = getThePrice('phone-price');
    const newPhoneTotalPrice = newPhoneQuantity * 1219;
    setNewInnerText('phone-price',newPhoneTotalPrice);

    // Set The New Subtotal:
    const previousSubTotal = getThePrice('subTotal');
    const newSubTotal = previousSubTotal + 1219;
    setNewInnerText('subTotal',newSubTotal);
    // Set The Total Price 
    setNewInnerText('total',newSubTotal);
});

// Phone Quantity Subtraction

document.getElementById('phone-quantity-minus').addEventListener('click',function(){
    const previousPhoneQuantity = inputValue('phone-quantity');
    const newPhoneQuantity = previousPhoneQuantity - 1;
    if (previousPhoneQuantity === 0) {
        alert('Please Make Sure Your Quantity');
        return;
    }
    SetNewValue('phone-quantity' , newPhoneQuantity);

    //  Set The New Price

    const previousPhonePrice = getThePrice('phone-price');
    const newPhoneTotalPrice = previousPhonePrice - 1219;
    setNewInnerText('phone-price',newPhoneTotalPrice);

    // Set The New Subtotal:
    const previousSubTotal = getThePrice('subTotal');
    const newSubTotal = previousSubTotal - 1219;
    setNewInnerText('subTotal',newSubTotal);
    // Set The Total Price 
    setNewInnerText('total',newSubTotal);
});


// ---------------------------------------------------------------------------

// Phone Case Price And Quantity Update

// Phone Case Price And Quantity Addition
document.getElementById('case-quantity-plus').addEventListener('click',function(){
    const previousCaseQuantity = inputValue('case-quantity');
    const newCaseQuantity = previousCaseQuantity + 1;
    SetNewValue('case-quantity' , newCaseQuantity);

    //  Set The New Price

    const previousCasePrice = getThePrice('case-price');
    const newCaseTotalPrice = previousCasePrice + 59;
    setNewInnerText('case-price',newCaseTotalPrice);

    // Set The New Subtotal:
    const previousSubTotal = getThePrice('subTotal');
    const newSubTotal = previousSubTotal + 59;
    setNewInnerText('subTotal',newSubTotal);
    // Set The Total Price 
    setNewInnerText('total',newSubTotal);
    // Set The Tax Amount
    const previousTax = getThePrice('tax');
    const newTaxAmount = (newSubTotal * 0.1.toFixed(2));
    const taxAmount = parseFloat(newTaxAmount);

    setNewInnerText('tax',taxAmount);

});

// Phone Case Price And Quantity Subtraction
document.getElementById('case-quantity-minus').addEventListener('click',function(){
    const previousCaseQuantity = inputValue('case-quantity');
    const newCaseQuantity = previousCaseQuantity - 1;
    if (previousCaseQuantity === 0) {
        alert('Please Make Sure Your Quantity');
        return;
    }
    SetNewValue('case-quantity' , newCaseQuantity);

    //  Set The New Price

    const previousCasePrice = getThePrice('case-price');
    const newCaseTotalPrice = previousCasePrice - 59;
    setNewInnerText('case-price',newCaseTotalPrice);

    // Set The New Subtotal:
    const previousSubTotal = getThePrice('subTotal');
    const newSubTotal = previousSubTotal - 59;
    setNewInnerText('subTotal',newSubTotal);
    // Set The Total Price 
    setNewInnerText('total',newSubTotal);
});


document.getElementById('buy-now').addEventListener('click',function(){
alert('Thank You For Your Buying');
SetNewValue('phone-quantity' , 0);
SetNewValue('case-quantity',0);
setNewInnerText('phone-price',0);
setNewInnerText('case-price',0);
setNewInnerText('subTotal',0);
setNewInnerText('total',0);
});