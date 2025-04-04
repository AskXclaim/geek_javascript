console.info("Show Hide Password");
const addListeners = () => {
    console.info("I am in window.addEventListener");
    const passwordContainerId = "password_container";
    const passwordContainerElement = document.getElementById(passwordContainerId);
    const passwordId = "password";
    const passwordInputElement = document.getElementById(passwordId);
    const iconId = "password_icon";
    const iconElement = document.getElementById(iconId);
    setupEventListener(passwordInputElement, passwordContainerElement, iconElement);
};
const setupEventListener = (passwordInputElement, passwordContainerElement, iconElement) => {
    passwordInputElement?.addEventListener("focusin", () => {
        passwordContainerElement?.classList.add("password_container_highlight");
    });
    passwordInputElement?.addEventListener("focusout", () => {
        passwordContainerElement?.classList.remove("password_container_highlight");
    });
    iconElement?.addEventListener("mousedown", () => {
        iconElement.innerHTML = "&#128584;";
        passwordInputElement.type = "text";
    });
    iconElement?.addEventListener("mouseup", () => {
        iconElement.innerHTML = "&#128064;";
        passwordInputElement.type = "password";
    });
};
const onPasswordIconClick = (iconElementId) => {
};
export { addListeners };
