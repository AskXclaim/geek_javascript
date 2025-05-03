const shouldEnableButton = (value: string) => value && value.trim().length > 0;
const disableEnableButton = (id: string, shouldDisable: boolean) => {
    const button = document.getElementById(id) as HTMLButtonElement;
    if (button) {
        button.disabled = shouldDisable;
    }
}
const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email.trim());
}

const displayMessage = (isError: boolean, message: string, element: HTMLParagraphElement | HTMLSpanElement) => {
    element.innerText = "";
    element.classList.remove("valid");
    element.classList.remove("invalid");
    if (message?.trim().length > 0) {
        element.innerText =message.trim();
        if (isError) {
            element.classList.add("invalid");
        } else {
            element.classList.add("valid");
        }
    }
}

export {shouldEnableButton, disableEnableButton, isEmailValid, displayMessage};