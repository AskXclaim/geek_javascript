declare const shouldEnableButton: (value: string) => boolean | "";
declare const disableEnableButton: (id: string, shouldDisable: boolean) => void;
declare const isEmailValid: (email: string) => boolean;
declare const displayMessage: (isError: boolean, message: string, element: HTMLParagraphElement | HTMLSpanElement) => void;
export { shouldEnableButton, disableEnableButton, isEmailValid, displayMessage };
