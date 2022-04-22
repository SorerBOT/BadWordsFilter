import json from "@rollup/plugin-json";

export default {
    input: "./Util/Util.js",
    output: {
        file: "build/bundle.js",
        format: "cjs"
    },
    plugins: [json()]
}