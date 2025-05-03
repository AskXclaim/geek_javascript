const shouldEnableButton = (value) => value && value.trim().length > 0;
const disableEnableButton = (id, shouldDisable) => {
    const button = document.getElementById(id);
    if (button) {
        button.disabled = shouldDisable;
    }
};
const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email.trim());
};
const displayMessage = (isError, message, element) => {
    element.innerText = "";
    element.classList.remove("valid");
    element.classList.remove("invalid");
    if (message?.trim().length > 0) {
        element.innerText = message.trim();
        if (isError) {
            element.classList.add("invalid");
        }
        else {
            element.classList.add("valid");
        }
    }
};
export { shouldEnableButton, disableEnableButton, isEmailValid, displayMessage };
