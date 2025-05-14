import {DisplayType} from "./displayType.js";
import {PasswordSelection} from "./PasswordSelection.js";
import {PasswordOptions} from "./passwordOptions.js";

const getElementById = (id: string) => document.getElementById(id);

const isValueValid = (value: string | null): boolean => {
    if (value === null || value === undefined) {
        return false
    }
    const number = parseInt(value, 10);
    const regex = /\b(0?[8-9]|1[0-6])\b/;
    return regex.test(number.toString());
}
const setDisplay =
    (element: HTMLSpanElement | HTMLDivElement,
     displayType: DisplayType = DisplayType.Inline) => {
        element.classList.remove("display-none");
        element.classList.remove("display-block");
        element.classList.remove("display-inline");
        element.classList.add(`display-${displayType}`);
    }


const setStateBasedOnInputValidity = (event: InputEvent, message: string | null = null) => {
    const generatePasswordBtn = getElementById("generatePasswordBtn") as HTMLButtonElement;
    const errorSymbolSpan = getElementById("errorAsterisk") as HTMLSpanElement;
    const errorDiv = getElementById("errorMessage") as HTMLDivElement;
    const target = event.target as HTMLInputElement;
    console.log(isValueValid(target?.value));
    if (isValueValid(target?.value)) {
        generatePasswordBtn.disabled = false;
        errorDiv.innerText = "";
        setDisplay(errorSymbolSpan, DisplayType.None);
        setDisplay(errorDiv, DisplayType.None);
    } else {
        generatePasswordBtn.disabled = true;
        errorSymbolSpan.innerText = "*";
        errorDiv.innerText = message ?? "Length has to be between 8 to 16 characters!";
        setDisplay(errorSymbolSpan, DisplayType.Inline);
        setDisplay(errorDiv, DisplayType.block);
    }

}
const getSelections = () => {
    const includeUppercaseElement = getElementById("includeUppercase") as HTMLInputElement;
    const includeNumbersElement = getElementById("includeNumbers") as HTMLInputElement;
    const includeSpecialCharactersElement = getElementById("includeSpecialCharacters") as HTMLInputElement;
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
}

window.addEventListener("load", () => {
    const passwordLengthElement = getElementById("passwordLength") as HTMLInputElement;
    const passwordContainer = getElementById("passwordContainer") as HTMLDivElement;
    const generatePasswordBtn = getElementById("generatePasswordBtn") as HTMLButtonElement;
    const resetBtn = getElementById("resetBtn") as HTMLButtonElement;
    generatePasswordBtn.disabled = !isValueValid(passwordLengthElement.value);
    passwordLengthElement.addEventListener("input", (event) => {
        setStateBasedOnInputValidity(event as InputEvent);
    });
    generatePasswordBtn.addEventListener("click", () => {
        passwordContainer.innerText = getPassword(passwordLengthElement.value);
    });

    resetBtn.addEventListener("click", () => {
        passwordLengthElement.value = "8";
        const checkBoxes = document.querySelectorAll("div.checkbox-container > input[type=checkbox]");
        checkBoxes.forEach(checkBox => {
            (checkBox as HTMLInputElement).checked = false;
            passwordContainer.innerText = "Your password will appear here";
        })
    });
});

const getPassword = (inputValue: string) => {
    const selections = getSelections();
    return generatePassword(selections, parseInt(inputValue));
}
const generatePassword = (passwordSelections: PasswordSelection, length: number) => {
    const password = new Array<string>(length);
    const maxLength = getMaxLength(passwordSelections);
    let randomNumber = 0;
    for (let i = 0; i < length; i++) {
        randomNumber = (Math.floor(Math.random() * (maxLength + 1)));
        password.push(generateValue(randomNumber, passwordSelections));
    }
    return password.join("");
}
const getMaxLength = (passwordSelections: PasswordSelection) => {
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
}
const generateValue = (randomNumber: number, passwordSelections: PasswordSelection) => {
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
}
const generateLowerCaseOnlyPassword = () =>
    String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);

const generateUpperCaseOnlyPassword = () =>
    String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);

const generateNumberOnlyPassword = () =>
    Math.floor(Math.random() * (9 + 1)).toString();
const generateSpecialCharacterOnlyPassword = () =>
    String.fromCharCode(Math.floor(Math.random() * (39 - 33 + 1)) + 33);