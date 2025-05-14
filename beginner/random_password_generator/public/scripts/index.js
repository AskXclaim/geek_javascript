import { DisplayType } from "./displayType.js";
import { PasswordSelection } from "./PasswordSelection.js";
import { PasswordOptions } from "./passwordOptions.js";
const getElementById = (id) => document.getElementById(id);
const isValueValid = (value) => {
    if (value === null || value === undefined) {
        return false;
    }
    const number = parseInt(value, 10);
    const regex = /\b(0?[8-9]|1[0-6])\b/;
    return regex.test(number.toString());
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
    const target = event.target;
    console.log(isValueValid(target?.value));
    if (isValueValid(target?.value)) {
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
const getSelections = () => {
    const includeUppercaseElement = getElementById("includeUppercase");
    const includeNumbersElement = getElementById("includeNumbers");
    const includeSpecialCharactersElement = getElementById("includeSpecialCharacters");
    const selections = new PasswordSelection();
    if (includeUppercaseElement.checked) {
        selections.IncludeUpperCase = PasswordOptions.UseUpperCase;
    }
    if (includeNumbersElement.checked) {
        selections.IncludeNumbers = PasswordOptions.UseNumbers;
    }
    if (includeSpecialCharactersElement.checked) {
        selections.IncludeSpecialCharacters = PasswordOptions.UseSpecialCharacter;
    }
    return selections;
};
window.addEventListener("load", () => {
    const passwordLengthElement = getElementById("passwordLength");
    const passwordContainer = getElementById("passwordContainer");
    const generatePasswordBtn = getElementById("generatePasswordBtn");
    const resetBtn = getElementById("resetBtn");
    generatePasswordBtn.disabled = !isValueValid(passwordLengthElement.value);
    passwordLengthElement.addEventListener("input", (event) => {
        setStateBasedOnInputValidity(event);
    });
    generatePasswordBtn.addEventListener("click", () => {
        passwordContainer.innerText = getPassword(passwordLengthElement.value);
    });
    resetBtn.addEventListener("click", () => {
        passwordLengthElement.value = "8";
        const checkBoxes = document.querySelectorAll("div.checkbox-container > input[type=checkbox]");
        checkBoxes.forEach(checkBox => {
            checkBox.checked = false;
            passwordContainer.innerText = "Your password will appear here";
        });
    });
});
const getPassword = (inputValue) => {
    const selections = getSelections();
    return generatePassword(selections, parseInt(inputValue));
};
const generatePassword = (passwordSelections, length) => {
    const password = new Array(length);
    const maxLength = getMaxLength(passwordSelections);
    let randomNumber = 0;
    for (let i = 0; i < length; i++) {
        randomNumber = (Math.floor(Math.random() * (maxLength + 1)));
        password.push(generateValue(randomNumber, passwordSelections));
    }
    return password.join("");
};
const getMaxLength = (passwordSelections) => {
    let maxLength = 0;
    if (passwordSelections.IncludeUpperCase !== null) {
        maxLength = passwordSelections.IncludeUpperCase;
    }
    if (passwordSelections.IncludeNumbers !== null) {
        maxLength = passwordSelections.IncludeNumbers;
    }
    if (passwordSelections.IncludeSpecialCharacters !== null) {
        maxLength = passwordSelections.IncludeSpecialCharacters;
    }
    return maxLength;
};
const generateValue = (randomNumber, passwordSelections) => {
    switch (randomNumber) {
        case passwordSelections.IncludeLowerCase:
            return generateLowerCaseOnlyPassword();
        case passwordSelections.IncludeUpperCase:
            return generateUpperCaseOnlyPassword();
        case passwordSelections.IncludeNumbers:
            return generateNumberOnlyPassword();
        case passwordSelections.IncludeSpecialCharacters:
            return generateSpecialCharacterOnlyPassword();
        default:
            return generateLowerCaseOnlyPassword();
    }
};
const generateLowerCaseOnlyPassword = () => String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
const generateUpperCaseOnlyPassword = () => String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
const generateNumberOnlyPassword = () => Math.floor(Math.random() * (9 + 1)).toString();
const generateSpecialCharacterOnlyPassword = () => String.fromCharCode(Math.floor(Math.random() * (39 - 33 + 1)) + 33);
