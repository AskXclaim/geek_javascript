const isInputValid = (value) => Number.isFinite(parseFloat(value));
const areInputsValid = (inputOneId, inputTwoId) => {
    const inputOne = document.getElementById(inputOneId);
    const inputTwo = document.getElementById(inputTwoId);
    return inputOne && inputTwo && isInputValid(inputOne.value)
        && isInputValid(inputTwo.value) && isGreaterThanOrEqual(inputTwo.value, inputOne.value);
};
const isGreaterThanOrEqual = (value1, value2) => parseFloat(value1) >= parseFloat(value2);
const generateRandomNumber = (minNumber, maxNumber) => {
    const minCeiled = Math.ceil(minNumber);
    const maxFloored = Math.floor(maxNumber);
    return Math.random() * ((maxFloored - minCeiled + 1) + minCeiled);
};
const displayMessage = (value, elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = value;
    }
};
const reset = (elementsIds) => {
    const inputOneElement = document.getElementById(elementsIds.inputOneId);
    const inputTwoElement = document.getElementById(elementsIds.inputTwoId);
    const messageElement = document.getElementById(elementsIds.messageElementId);
    const buttonElement = document.getElementById(elementsIds.generateRandomNumberButtonId);
    if (inputOneElement && inputTwoElement && messageElement && buttonElement) {
        inputOneElement.value = "";
        inputTwoElement.value = "";
        messageElement.innerText = "";
        buttonElement.disabled = true;
    }
};
export { areInputsValid, generateRandomNumber, displayMessage, reset };
