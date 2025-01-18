import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
  },
  external: ["react", "react-native", "@expo/vector-icons", "expo-linear-gradient"],
  plugins: [
    terser({
      compress: {
        drop_console: true, // Removes console logs
        drop_debugger: true, // Removes debugger statements
      },
      mangle: true, // Shortens variable names
      output: {
        comments: false, // Removes comments
      },
    }),
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
