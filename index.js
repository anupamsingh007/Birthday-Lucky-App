const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector("#check-button");
const outputBox = document.querySelector("#output");


function checkNoIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && dob)
        compareValues(sum, luckyNumber.value)
    else
        outputBox.innerText = "Fill in the blank fields"
};

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index))
    }
    return sum;
}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = ("your birthday is lucky 🎂")


    } else {
        outputBox.innerText = ("your birthday is not lucky")

    }
}

button.addEventListener("click", checkNoIsLucky)