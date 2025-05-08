const isValueEmpty = (value) => !(value && value.trim().length > 0);
const getUnicodeValue = (value) => {
    const uniCodes = [...value].map(character => {
        return character.codePointAt(0);
    });
    return uniCodes.join(",");
};
const displayResult = (message, elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = message;
    }
};
export { isValueEmpty, getUnicodeValue, displayResult };
