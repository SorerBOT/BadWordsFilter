import { removeSpace, removePunctuation } from "./Util.js";

export default function clean(String) {
    return removePunctuation(removeSpace(String.toLowerCase()));
}