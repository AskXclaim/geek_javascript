type ElementsIds = {
    inputOneId: string,
    inputTwoId: string,
    messageElementId: string,
    generateRandomNumberButtonId: string,
}
const isInputValid = (value: string) => Number.isFinite(parseFloat(value));

const areInputsValid = (inputOneId: string, inputTwoId: string) => {
    const inputOne = document.getElementById(inputOneId) as HTMLInputElement;
    const inputTwo = document.getElementById(inputTwoId) as HTMLInputElement;
    return inputOne && inputTwo && isInputValid(inputOne.value)
        && isInputValid(inputTwo.value) && isGreaterThanOrEqual(inputTwo.value, inputOne.value);
}

const isGreaterThanOrEqual = (value1: string, value2: string) => parseFloat(value1) >= parseFloat(value2);
const generateRandomNumber = (minNumber: number, maxNumber: number) => {
    const minCeiled = Math.ceil(minNumber);
    const maxFloored = Math.floor(maxNumber);
    return Math.random() * ((maxFloored - minCeiled + 1) + minCeiled);
}
const displayMessage = (value: string, elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = value;
    }
}

const reset = (elementsIds: ElementsIds) => {
    const inputOneElement = document.getElementById(elementsIds.inputOneId) as HTMLInputElement;
    const inputTwoElement = document.getElementById(elementsIds.inputTwoId) as HTMLInputElement;
    const messageElement = document.getElementById(elementsIds.messageElementId) as HTMLElement;
    const buttonElement = document.getElementById(elementsIds.generateRandomNumberButtonId) as HTMLButtonElement;
    if (inputOneElement && inputTwoElement && messageElement && buttonElement) {
        inputOneElement.value = "";
        inputTwoElement.value = "";
        messageElement.innerText = "";
        buttonElement.disabled = true;
    }
}

export {ElementsIds,areInputsValid, generateRandomNumber, displayMessage, reset};