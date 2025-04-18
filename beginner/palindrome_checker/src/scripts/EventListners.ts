import {isPalindrome} from "./Palindrome.js";
import {doesElementExist, isElementButton, isElementInput, isElementParagraph} from "./HtmlElementValidation.js";
import {getButtonById, getInputById, getParagraphById} from "./HtmlElements.js";

const buttonClickEvent =
    (inputId: string, paragraphId: string) => {
        if (!doesElementExist(inputId) || !doesElementExist(paragraphId)) {
            return;
        }
        if (!isElementInput(inputId) || !isElementParagraph(paragraphId)) {
            return;
        }

        const input = getInputById(inputId);
        const resultParagraph = getParagraphById(paragraphId);
        const falseResult = "is not a palindrome";
        const passResult = "is a palindrome";

        const inputValue = input.value;

        const isValuePalindrome = isPalindrome(inputValue);
        if (isValuePalindrome) {
            resultParagraph.classList.remove("red");
            resultParagraph.classList.add("green");
            resultParagraph.innerText = `${inputValue} ${passResult}`;
        } else {
            resultParagraph.classList.remove("green");
            resultParagraph.classList.add("red");
            resultParagraph.innerText = `${inputValue} ${falseResult}`;
        }
    }

const inputInputEvent =
    (event: InputEvent, buttonId: string, paragraphId: string) => {
        event.preventDefault();
        if (!doesElementExist(buttonId) || !doesElementExist(paragraphId)) {
            return;
        }
        if (!isElementButton(buttonId) || !isElementParagraph(paragraphId)) {
            return;
        }
        const button = getButtonById(buttonId);
        const resultParagraph = getParagraphById(paragraphId);
        const input = event.target as HTMLInputElement;
        button.disabled = input.value.length === 0;
        resultParagraph.innerText = "";
    }

export {buttonClickEvent, inputInputEvent};