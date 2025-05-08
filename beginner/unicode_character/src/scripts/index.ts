const isValueEmpty = (value: string) =>
    !(value && value.trim().length > 0);

const getUnicodeValue = (value: string) => {
    const uniCodes = [...value].map(character => {
        return character.codePointAt(0);
    });
    return uniCodes.join(",");
}
const displayResult = (message: string, elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = message;
    }
}

export {isValueEmpty, getUnicodeValue, displayResult};
