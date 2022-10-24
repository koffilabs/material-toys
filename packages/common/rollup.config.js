import pkg from "./package.json";
import esbuild from "rollup-plugin-esbuild";

process.stdin.removeAllListeners("end");

export default [
  {
    input: "src/main.ts",
    output: {
      dir: "dist",
    //   name: "bundle",
    //   file: pkg.browser,
    //   format: "umd",
    //   sourcemap: false,//process.env.NODE_ENV !== "production",
    },
    plugins: [
      // babel({ babelHelpers: "bundled" }),
      esbuild(),
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
      esbuild({
        minify: process.env.NODE_ENV === "production",
      }),
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: process.env.NODE_ENV !== "production",
      },
      {
        file: pkg.module,
        // dir: "dist",
        format: "esm",
        sourcemap: process.env.NODE_ENV !== "production",
        // preserveModules: true,

      },
    ],
  },
];
