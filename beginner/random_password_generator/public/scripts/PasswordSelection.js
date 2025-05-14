import { PasswordOptions } from "./passwordOptions.js";
class PasswordSelection {
    constructor(includeUpperCase = null, includeNumbers = null, includeSpecialCharacters = null) {
        this.IncludeLowerCase = PasswordOptions.UseLowerCase;
        this.IncludeUpperCase = includeUpperCase;
        this.IncludeNumbers = includeNumbers;
        this.IncludeSpecialCharacters = includeSpecialCharacters;
    }
}
export { PasswordSelection };
