import SolutionType from "./enums/SolutionTypes.js";

console.log("welcome");

const isNumber = (value: string) =>
    !Number.isNaN(parseInt(value))

const convertToInteger = (value: string) =>
    Math.floor(Math.abs(parseInt(value)));

const isNumberPrime = (value: number) => {
    if (value === 0 || value === 1) {
        return false;
    }
    if (value === 2 || value === 3) {
        return true;
    }
    for (let i = 4; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}
const efficientIsNumberPrime = (value: number) => {
    if (value < 2) {
        return false;
    }
    if (value % 2 == 0) {
        return false;
    }
  
    for (let i = 3; i * i <= value; i += 2) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}

const isValuePrime = (value: string, solutionType: SolutionType) => {
    if (!isNumber(value)) {
        return false;
    }
    const convertedValue = convertToInteger(value);
    return solutionType === SolutionType.simple ? isNumberPrime(convertedValue) : efficientIsNumberPrime(convertedValue);
}

export {isValuePrime};