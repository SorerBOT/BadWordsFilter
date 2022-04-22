import { removeSpace, removePunctuation } from "./Util.js";

export default function clean(String) {
    console.log(removePunctuation(String));
    return removePunctuation(removeSpace(String.toLowerCase()));
}