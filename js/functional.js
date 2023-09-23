// getThe Number element Value
function getElementValue(elementId) {
    const getElement = document.getElementById(elementId);
    const elementValue = getElement.value;
    const number = parseFloat(elementValue);
    return number;
}
// getThe Number element Text
function getElementText(textId) {
    const getElement = document.getElementById(textId);
    const elementValue = getElement.innerText;
    const number = parseFloat(elementValue);
    return number;
}

// Set The Element Value

function SetTheValue(element , value) {
    const previousQuantity = document.getElementById(element);
    previousQuantity.value = value;
};

// Set The Element Text

function SetTheText(element , value) {
    const previousPrice = document.getElementById(element);
    previousPrice.innerText = value;
};


// Quantity Function

function updateQuantity(isIncrease ,inputId ) {
    const quantity = getElementValue(inputId);
    let newQuantity;
    
    if (isIncrease === true) {
        newQuantity = quantity + 1;
    }
    else{
        newQuantity = quantity -1;
        
    }
    return newQuantity;
};


// Price Calculate
function priceCalculate(price , quantity) {
    const newPrice = quantity * price;
    return newPrice;
};

// Total Price calculate
function totalPriceCalculate() {
    const totalPhonePrice = getElementText('phone-price');
    const totalCasePrice = getElementText('case-price');
    const totalPrice = totalPhonePrice + totalCasePrice;
    SetTheText('subTotal' , totalPrice)
    const totalTax = (totalPrice * 0.1)
    SetTheText('tax' , Math.round(totalTax))
    const finalAmount = totalPrice + totalTax;
    SetTheText('total-price' , totalPrice)

}


