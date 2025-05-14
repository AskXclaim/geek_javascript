import {PasswordOptions} from "./passwordOptions.js";

class PasswordSelection {
    public IncludeLowerCase: PasswordOptions | null;
    public IncludeUpperCase: PasswordOptions | null;
    public IncludeNumbers: PasswordOptions | null;
    public IncludeSpecialCharacters: PasswordOptions | null;

    constructor(includeUpperCase: PasswordOptions | null = null,
                includeNumbers: PasswordOptions | null = null,
                includeSpecialCharacters: PasswordOptions | null = null) {
        this.IncludeLowerCase = PasswordOptions.UseLowerCase;
        this.IncludeUpperCase = includeUpperCase;
        this.IncludeNumbers = includeNumbers;
        this.IncludeSpecialCharacters = includeSpecialCharacters;
    }
}

export {PasswordSelection};