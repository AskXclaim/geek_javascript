import { DisplayType } from "./displayType.js";
const getElementById = (id) => document.getElementById(id);
const isValueValid = (value) => {
    if (value === null || value === undefined)
        return false;
    return value.match("(0?[8-9]|[1][0-6])") !== null;
};
const setDisplay = (element, displayType = DisplayType.Inline) => {
    element.classList.remove("display-none");
    element.classList.remove("display-block");
    element.classList.remove("display-inline");
    element.classList.add(`display-${displayType}`);
};
const setStateBasedOnInputValidity = (event, message = null) => {
    const generatePasswordBtn = getElementById("generatePasswordBtn");
    const errorSymbolSpan = getElementById("errorAsterisk");
    const errorDiv = getElementById("errorMessage");
    console.log(isValueValid(event.data));
    if (isValueValid(event.data)) {
        generatePasswordBtn.disabled = false;
        errorDiv.innerText = "";
        setDisplay(errorSymbolSpan, DisplayType.None);
        setDisplay(errorDiv, DisplayType.None);
    }
    else {
        generatePasswordBtn.disabled = true;
        errorSymbolSpan.innerText = "*";
        errorDiv.innerText = message ?? "Length has to be between 8 to 16 characters!";
        setDisplay(errorSymbolSpan, DisplayType.Inline);
        setDisplay(errorDiv, DisplayType.block);
    }
};
window.addEventListener("load", () => {
    const passwordLengthElement = getElementById("passwordLength");
    const generatePasswordBtn = getElementById("generatePasswordBtn");
    generatePasswordBtn.disabled = !isValueValid(passwordLengthElement.value);
    passwordLengthElement.addEventListener("input", (event) => {
        setStateBasedOnInputValidity(event);
    });
});
