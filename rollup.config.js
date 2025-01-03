import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm", 
    sourcemap: true,
  },
  external: ["react", "react-native"],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
    }),
    babel({
        extensions: [".js", ".jsx", ".ts", ".tsx"], 
        babelHelpers: "bundled",
        presets: ["@babel/preset-react"],
      }),
  ],
});
