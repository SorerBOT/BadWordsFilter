import { clean } from "./Util.js"
import data from "../Data/english.json";

export default function censor(String) {
    String = clean(String);

    for (let key in data) String = String.replace(new RegExp(`${key}`, "g"), "*".repeat(key.length));
    return String;
}