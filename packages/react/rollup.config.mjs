import resolve from "@rollup/plugin-node-resolve";
// import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";
import esbuild from "rollup-plugin-esbuild";
import external from "rollup-plugin-peer-deps-external";

// import postcss from 'rollup-plugin-postcss';

import { visualizer } from "rollup-plugin-visualizer";
import pkg from "./package.json" with { type: "json" };

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
