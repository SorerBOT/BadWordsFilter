import { regexpTokens, punctuationTokens } from "../RegExp/Tokens.js";
import data from "../Data/english.json";

export default function censor(String) {
    for (let key in data) {
        const characters = key.split("");
        let regexString = "";
        characters.forEach((character, index) => {
            regexString = regexpTokens.includes(character) ? regexString.concat(`\\${character}`) : regexString.concat(character);
            if (index === characters.length - 1) return;
            regexString = regexString.concat(punctuationTokens);
        });
        String = String.replace(new RegExp(`${regexString}`, "gi"), "*".repeat(key.length));
    }
    return String;
}