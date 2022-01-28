import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

// import postcss from 'rollup-plugin-postcss';

import pkg from "./package.json";

export default [
  {
    input: "icons/index.js",
    external: ["react"],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: false,
        name: "icons-react",
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      // typescript({ tsconfig: "./tsconfig.json" }),
      esbuild({
        include: [/\.jsx?$/, /\.vue\?.*?lang=ts/],
        minify: process.env.NODE_ENV === "production",
        useTsconfigDeclarationDir: true,
      }),
      // postcss(),
      terser(),
    ],
  },
  // {
  //   input: "dist/esm/types/main.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  // },
];
