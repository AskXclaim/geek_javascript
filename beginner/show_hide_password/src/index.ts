const inputElementValue: string[] = [];
const inputElementMaskedValue: string[] = [];
let currentPosition = 0;
const addListeners = () => {
    const passwordContainerId = "password_container";
    const textPasswordContainerId = "text_password_container";
    const passwordId = "password";
    const textPasswordId = "text_password";
    const iconId = "password_icon";
    const textIconId = "text_password_icon";
    const passwordContainerElement = document.getElementById(passwordContainerId) as HTMLDivElement;
    const textPasswordContainerElement = document.getElementById(textPasswordContainerId) as HTMLDivElement;
    const passwordInputElement = document.getElementById(passwordId) as HTMLInputElement;
    const textPasswordInputElement = document.getElementById(textPasswordId) as HTMLInputElement;
    const iconElement = document.getElementById(iconId) as HTMLHtmlElement;
    const textIconElement = document.getElementById(textIconId) as HTMLHtmlElement;

    setupEventListener(passwordInputElement, passwordContainerElement, iconElement);
    setupEventListener(textPasswordInputElement, textPasswordContainerElement, textIconElement);
}

const setupEventListener =
    (inputElement: HTMLInputElement, containerElement: HTMLDivElement, iconElement: HTMLHtmlElement) => {
        inputElement?.addEventListener("focusin", () => {
            containerElement?.classList.add("password_container_highlight");
        });
        inputElement?.addEventListener("focusout", () => {
            containerElement?.classList.remove("password_container_highlight");
        });
        iconElement?.addEventListener("mousedown", () => {
            iconElement.innerHTML = "&#128584;";
            inputElement.value = inputElementValue.join("");
        });
        iconElement?.addEventListener("mouseup", () => {
            iconElement.innerHTML = "&#128064;";
            inputElement.value = inputElementMaskedValue.join("");
        });
        if (inputElement.type === "text") {
            inputElement.addEventListener("input", (event) => {
                const inputEvent = event as InputEvent;
                let valueLength = inputElement.value.length;
                if (inputEvent?.data) {
                    inputElementValue.push(inputEvent.data);
                    inputElementMaskedValue.push("*");
                    currentPosition++;
                    inputElement.value = inputElementMaskedValue.join("");
                }
                if (inputEvent && inputEvent.data === null && inputEvent.target && valueLength < currentPosition) {
                    inputElementValue.pop();
                    inputElementMaskedValue?.pop();
                    --currentPosition;
                }
            })
        }
    }


export {addListeners};