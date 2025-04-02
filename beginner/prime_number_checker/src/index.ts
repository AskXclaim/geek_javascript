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
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}

const isValuePrime = (value: string) => {
    if (!isNumber(value)) {
        return false;
    }
    const convertedValue = convertToInteger(value);
    return isNumberPrime(convertedValue);
}

export { isValuePrime };