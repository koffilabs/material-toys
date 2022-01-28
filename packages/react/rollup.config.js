import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

// import postcss from 'rollup-plugin-postcss';

import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/main.ts",
    external: ["react"],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        name: "material-toys",
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      esbuild({
        include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
        minify: process.env.NODE_ENV === "production",
        useTsconfigDeclarationDir: true,
      }),
      // postcss(),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/main.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
