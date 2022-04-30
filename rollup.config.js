import json from "@rollup/plugin-json";

export default {
    input: "./Class/Filter.js",
    output: {
        file: "build/bundle.js",
        format: "cjs"
    },
    plugins: [json()]
}