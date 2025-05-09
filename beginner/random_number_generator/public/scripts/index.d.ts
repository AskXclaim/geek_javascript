type ElementsIds = {
    inputOneId: string;
    inputTwoId: string;
    messageElementId: string;
    generateRandomNumberButtonId: string;
};
declare const areInputsValid: (inputOneId: string, inputTwoId: string) => boolean;
declare const generateRandomNumber: (minNumber: number, maxNumber: number) => number;
declare const displayMessage: (value: string, elementId: string) => void;
declare const reset: (elementsIds: ElementsIds) => void;
export { ElementsIds, areInputsValid, generateRandomNumber, displayMessage, reset };
