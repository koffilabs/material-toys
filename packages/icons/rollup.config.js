import esbuild from "rollup-plugin-esbuild";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";

process.stdin.removeAllListeners("end");

export default [
  {
    input: "src/vue/icons/index.ts",
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
      alias({ entries: [{ find: /^@\/(.+)/, replacement: "./$1" }] }),
      esbuild({
        include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
        minify: process.env.NODE_ENV === "production",
      }),
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
  },
];
