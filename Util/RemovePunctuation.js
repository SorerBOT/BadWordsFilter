export default function removePunctuation(String) {
    return String.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}