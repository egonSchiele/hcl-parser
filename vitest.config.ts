import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    exclude: ["dist", "node_modules"],
  },
  resolve: {
    alias: [{ find: "@/lib", replacement: path.resolve(__dirname, "./lib") }],
  },
});
