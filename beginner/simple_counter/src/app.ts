const getItemToUpdate = (itemId: string): HTMLSpanElement | null =>
    document.getElementById(`${itemId}`);

const getCurrentValue = (item: HTMLSpanElement | null) => {
    if (item && !Number.isNaN(parseInt(item.innerHTML, 10))) {
        return parseInt(item.innerHTML, 10);
    }
    return null;
}

const increaseByOne = (displayItemId: string) => {
    let value: number | null = 0;
    try {
        const item: HTMLSpanElement | null = getItemToUpdate(displayItemId);
        value = getCurrentValue(item);
        if (item && value!==null) {
            if (value >= 0 && value < 10) {
                item.innerText = (value + 1).toString();
            }
            if (value >= 10) {
                item.innerText = "0";
            }
        }
    } catch (error) {
        console.error(error);
    }
}

const reduceByOne = (displayItemId: string) => {
    let value: number | null = 0;
    try {
        const item: HTMLSpanElement | null = getItemToUpdate(displayItemId);
        value = getCurrentValue(item);
        if (value !== null && item && value > 0 && value <= 10) {
            item.innerText = (value - 1).toString();
        }

    } catch (error) {
        console.error(error);
    }
}
const increaseClickCountByOne = (displayItemId: string) => {
    const item: HTMLSpanElement | null = getItemToUpdate(displayItemId);
    if (item) {
        let value: number | null = getCurrentValue(item);
        if (value !== null) {
            item.innerText = (value + 1).toString();
        } else {
            item.innerText = "1";
        }
    }
}
export {increaseByOne, reduceByOne, increaseClickCountByOne};
