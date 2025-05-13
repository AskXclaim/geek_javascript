import {DisplayType} from "./displayType.js";

const getElementById = (id: string) => document.getElementById(id);

const isValueValid = (value: string | null): boolean => {
    if (value === null || value === undefined) return false;
    return value.match("(0?[8-9]|[1][0-6])") !== null;
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
    console.log(isValueValid(event.data));
    if (isValueValid(event.data)) {
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
window.addEventListener("load", () => {
    const passwordLengthElement = getElementById("passwordLength") as HTMLInputElement;
    const generatePasswordBtn = getElementById("generatePasswordBtn") as HTMLButtonElement;
    generatePasswordBtn.disabled = !isValueValid(passwordLengthElement.value);
    passwordLengthElement.addEventListener("input", (event) => {
        setStateBasedOnInputValidity(event as InputEvent);
    });
});
