const getButtonById =
    (elementId: string): HTMLButtonElement =>
        document.getElementById(elementId) as HTMLButtonElement;

const getInputById =
    (elementId: string): HTMLInputElement =>
        document.getElementById(elementId) as HTMLInputElement;

const getParagraphById =
    (elementId: string): HTMLParagraphElement =>
        document.getElementById(elementId) as HTMLParagraphElement;

export {getButtonById, getInputById, getParagraphById};