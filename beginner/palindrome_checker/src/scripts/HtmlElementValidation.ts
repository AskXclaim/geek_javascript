const doesElementExist = (id: string) =>
    (id?.trim() && id.length > 0);

const isElementButton = (elementId: string) => {
    const element = document.getElementById(elementId);
    return element instanceof HTMLButtonElement;
}

const isElementInput = (elementId: string) => {
    const element = document.getElementById(elementId);
    return element instanceof HTMLInputElement;
}

const isElementParagraph = (elementId: string) => {
    const element = document.getElementById(elementId);
    return element instanceof HTMLParagraphElement;
}

export {doesElementExist, isElementButton, isElementInput, isElementParagraph};