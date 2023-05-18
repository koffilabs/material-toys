import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import esbuild from "rollup-plugin-esbuild";

// import postcss from 'rollup-plugin-postcss';

import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import analyzer from "rollup-plugin-analyzer";
import visualizer from "rollup-plugin-visualizer";

export default [
  {
    input: "src/main.ts",
    external: ["react"],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: process.env.NODE_ENV !== "production",
        // name: "material-toys",
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: process.env.NODE_ENV !== "production",
      },
    ],
    plugins: [
      external(),
      resolve({
        // dedupe: ["@material-toys/common"]
      }),
      // commonjs(),
      // typescript({ tsconfig: "./tsconfig.json" }),
      esbuild(),
      // {
      // include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
      // minify: process.env.NODE_ENV === "production",
      // }
      // postcss(),
      terser(),
      visualizer(),
    ],
  },
];
