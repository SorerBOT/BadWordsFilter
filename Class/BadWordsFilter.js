import Data from "../Data/english.json";
import { regexpTokens, punctuationTokens } from "../RegExp/Tokens.js";

export default class BadWordsFilter {
    #data;
    #token;
    /** 
     * @constructor
     */
    constructor(token = '*', data = Data) { this.#token = token; this.#data = data; }
    /**
     *  Sets the Filter's Token
     * @param {String} token 
     */
    setToken(token) { this.#token = token; }
    /**
     * Sets the list of profanities associated with a Filter
     * @param {Object} data 
     */
    setData(data) { this.#data = data; }
    /**
     * Removes a Word from the list.
     * @param {String} word 
     */
    removeWord(word) { delete this.#data[word]; }
    /**
     * Removes an Array of Words from the list.
     * @param {Array of Strings} words 
     */
    removeWords(words) { words.forEach((word) => this.removeWord(word)); }
    /**
     * Inserts a Word to the list.
     * @param {String} word 
     */
    addWord(word) { this.#data[word] = true; }
    /**
     * Inserts an Array of Words to the list.
     * @param {Array of Strings} words 
     */
    addWords(words) { words.forEach((word) => this.addWord(word)); }
    /**
     * Censors a String. ("A String With Curse" will turn into "A String With *****")
     * @param {String} string 
     * @returns {String} After Replacing All Profanities With Set Token
     */
    censor(string) {
        for (let key in this.#data) {
            const characters = key.split("");
            let regexString = "";
            characters.forEach((character, index) => {
                regexString = regexpTokens.includes(character) ? regexString.concat(`\\${character}`) : regexString.concat(character);
                if (index === characters.length - 1) return;
                regexString = regexString.concat(punctuationTokens);
            });
            string = string.replace(new RegExp(`${regexString}`, "gi"), this.#token.repeat(key.length));
        }
        return string;
    }
    /**
     * Returns Boolean according to whether a String includes a profanities. ("A String With Curse" will return true)
     * @param {String} string 
     * @returns {Boolean}
     */
    hasCurse(string) { return (string === this.censor(string)) ? false : true; }
    print() { console.log(this.#data); }
}