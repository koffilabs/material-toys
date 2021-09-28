import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";

process.stdin.removeAllListeners("end");

export default [
  // browser-friendly UMD build
  {
    input: "src/main.ts",
    output: {
      name: "bundle",
      file: pkg.browser,
      format: "umd",
    },
    plugins: [
      // babel({ babelHelpers: "bundled" }),
      typescript(), // so Rollup can find `ms`
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/main.ts",
    plugins: [
      // babel({ babelHelpers: "bundled" }),
      typescript(), // so Rollup can find `ms`
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
  },
];
