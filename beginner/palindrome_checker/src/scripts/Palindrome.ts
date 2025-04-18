const isValuePresent = (value: string) =>
    !(value.length <= 0 || value.trim().length <= 0);

const isPalindrome = (value: string) => {
    if (!isValuePresent(value)) {
        return false;
    }
    const length = value.length;
    if (length === 1) {
        return true;
    }
    let backwardCounter = 1;
    const loopTimes = Math.floor(length / 2);
    value = value.toLowerCase();
    for (let i = 0; i <= loopTimes; i++, backwardCounter++) {
        if (value.charAt(i) != value.charAt(length - backwardCounter)) {
            return false;
        }

    }
    return true;
}

export {isPalindrome};