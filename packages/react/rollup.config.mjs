import preserveDirectives from "rollup-plugin-preserve-directives";
import resolve from "@rollup/plugin-node-resolve";
import ts from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import esbuild from "rollup-plugin-esbuild";
import external from "rollup-plugin-peer-deps-external";

// import postcss from 'rollup-plugin-postcss';

import { visualizer } from "rollup-plugin-visualizer";
import pkg from "./package.json" with { type: "json" };
import tsconfig from "./tsconfig.json" with { type: "json" };
const outputOptions = {
  exports: "named",
  preserveModules: true,
  // sourcemap: process.env.NODE_ENV !== "production",
  sourcemap: false,
};
const onwarn = (warning, warn) => {
  // console.log("wcode", warning.code);
  if (warning.code !== "MODULE_LEVEL_DIRECTIVE") {
    warn(warning);
  }
};
export default [
  {
    onwarn,
    input: "src/main.ts",

    external: ["react"],
    output: {
      // file: pkg.publishConfig.main,
      dir: "dist/cjs",
      format: "cjs",
      ...outputOptions,
      // name: "material-toys",
    },

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
      ts({
        tsconfig: "tsconfig.json",
        declarationDir: "dist/cjs/types",
        sourceMap: false,

        outDir: "dist/cjs/packages",
      }),
      terser(),
      preserveDirectives(),
      // visualizer(),
    ],
  },
  {
    onwarn,
    input: "src/main.ts",

    external: ["react"],
    output: {
      // file: pkg.publishConfig.module,
      dir: "dist/esm",
      format: "esm",

      ...outputOptions,
    },

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
      ts({
        tsconfig: "tsconfig.json",
        // noImplicitAny: false,
        declarationDir: "dist/esm/types",
        sourceMap: false,

        outDir: "dist/esm/packages",
      }),
      terser(),
      preserveDirectives(),
      // visualizer(),
    ],
  },
];
