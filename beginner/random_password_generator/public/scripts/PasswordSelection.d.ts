import { PasswordOptions } from "./passwordOptions.js";
declare class PasswordSelection {
    IncludeLowerCase: PasswordOptions | null;
    IncludeUpperCase: PasswordOptions | null;
    IncludeNumbers: PasswordOptions | null;
    IncludeSpecialCharacters: PasswordOptions | null;
    constructor(includeUpperCase?: PasswordOptions | null, includeNumbers?: PasswordOptions | null, includeSpecialCharacters?: PasswordOptions | null);
}
export { PasswordSelection };
