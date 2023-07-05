
function getPin() {
    const pin = GeneratePin();
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


function GeneratePin() {

    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    console.log(pin);
    const displayPinField = document.getElementById('display-pin')
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {

    const typeNumberField = document.getElementById('type-field');
    const previousTypeNumberField = typeNumberField.value;
    const number = event.target.innerText;

    if (isNaN(number)) {
        if (number == 'C') {
            typeNumberField.value = '';
        }
        else if (number == '<') {
            const digits = previousTypeNumberField.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;

        }

    }
    else {


        const currentTypeNumberField = previousTypeNumberField + number;
        typeNumberField.value = currentTypeNumberField;
    }


})
document.getElementById('pin-submit').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin')
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-field');
    const typeNumber = typeNumberField.value;
    const pinUnmatch = document.getElementById('pin-unmatch');
    const pinSuccess = document.getElementById('pin-success');

    if (currentPin == typeNumber) {

        pinSuccess.style.display = 'block';
        pinUnmatch.style.display = 'none'
    }

    else {

        pinUnmatch.style.display = 'block'
        pinSuccess.style.display = 'none';
    }








})