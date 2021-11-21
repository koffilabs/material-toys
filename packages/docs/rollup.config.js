import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";
import replace from "rollup-plugin-replace";
// TODO replace replace with @rollup/plugin-replace
// import babel from "@rollup/plugin-babel";
// import scss from "rollup-plugin-scss"; // handles '.css' and '.scss'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;
process.stdin.removeAllListeners("end");

export default {
  input: "src/main.js",
  // external: ["vue"],
  output: {
    file: "dist/bundle.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: !production,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    // babel({ babelHelpers: "bundled" }),
    resolve(), // tells Rollup how to find date-fns in node_modules
    vue(),
    commonjs(), // converts date-fns to ES modules
    production && terser(), // minify, but only in production
  ],
};
