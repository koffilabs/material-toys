import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import esbuild from "rollup-plugin-esbuild";
// import typescript from "@rollup/plugin-typescript";
// import { DEFAULT_EXTENSIONS } from "@babel/core";
// import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";

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
      resolve({
        extensions: [
          ".js",
          ".vue",
          ".mjs",
          ".json",
          ".jsx",
          ".json",
          ".sass",
          ".scss",
        ],
      }),
      vue(),
      commonjs(), // so Rollup can convert `ms` to an ES module
      // babel({
      //   extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      // }),
      alias({ entries: [{ find: /^@\/(.+)/, replacement: "./$1" }] }),
      esbuild({
        include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
        minify: process.env.NODE_ENV === "production",
        useTsconfigDeclarationDir: true,
      }),
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
    external: ["vue"],
    plugins: [
      // babel({ babelHelpers: "bundled" }),
      resolve({
        extensions: [
          ".js",
          ".vue",
          ".mjs",
          ".json",
          ".jsx",
          ".json",
          ".sass",
          ".scss",
        ],
      }),
      vue(),
      commonjs(), // so Rollup can convert `ms` to an ES module
      // babel({
      //   extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      // }),
      alias({ entries: [{ find: /^@\/(.+)/, replacement: "./$1" }] }),
      esbuild({
        include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
        minify: process.env.NODE_ENV === "production",
        useTsconfigDeclarationDir: true,
      }),
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
  },
];
