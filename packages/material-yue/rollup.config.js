import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import vue from "rollup-plugin-vue";
process.stdin.removeAllListeners("end");

export default [
  // browser-friendly UMD build
  {
    input: "src/main.js",
    output: {
      name: "bundle",
      file: pkg.browser,
      format: "umd",
    },
    plugins: [
      // babel({ babelHelpers: "bundled" }),
      resolve(), // so Rollup can find `ms`
      vue(),
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/main.js",
    external: ["vue"],
    plugins: [
      // babel({ babelHelpers: "bundled" }),
      resolve(), // so Rollup can find `ms`
      vue(),
      commonjs(), // so Rollup can convert `ms` to an ES module
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
  },
];
