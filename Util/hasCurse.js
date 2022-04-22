import { clean } from "./Util.js";
import data from "../Data/english.json";

export default function hasCurse(String) {
    String = clean(String);

    for (let key in data) if (String.includes(key)) return true;
    return false;
}