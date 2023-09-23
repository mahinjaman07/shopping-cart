// inner text str to number

function getThePrice(priceId) {
    const getPrice = document.getElementById(priceId);
    const getPriceStr = getPrice.innerText;
    const price = parseFloat(getPriceStr);
    return price;

};

// Input Value Str To Number

function inputValue(valueId) {
    const inputField = document.getElementById(valueId);
    const inputFieldStr = inputField.value;
    const inputQuantity = parseFloat(inputFieldStr);
    return inputQuantity;
}
// set The New Value

function SetNewValue(element , value) {
    const previousElement = document.getElementById(element);
    previousElement.value = value;
}

// Set The New InnerText
function setNewInnerText(elementId , textValue) {
    const previousInnerText = document.getElementById(elementId);
    previousInnerText.innerText = textValue;
}

