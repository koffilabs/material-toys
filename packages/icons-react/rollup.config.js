import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import esbuild from "rollup-plugin-esbuild";

import pkg from "./package.json";

export default [
  {
    input: "icons/index.ts",
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
        format: "es",
        sourcemap: false,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      // typescript({ tsconfig: "./tsconfig.json" }),
      esbuild({
        include: [/\.tsx?$/, /\.jsx?$/, /\.vue\?.*?lang=ts/],
        minify: process.env.NODE_ENV === "production",
      }),
      // postcss(),
      terser(),
    ],
  },
];
