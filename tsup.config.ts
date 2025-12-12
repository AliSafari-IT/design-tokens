import { defineConfig } from "tsup";
import fs from "node:fs";
import path from "node:path";

function copyDirRecursive(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(src, dest);
      continue;
    }

    fs.copyFileSync(src, dest);
  }
}

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    outDir: "dist",
    onSuccess: async () => {
      const srcCss = path.resolve("css");
      const distCss = path.resolve("dist/css");
      if (fs.existsSync(srcCss)) {
        copyDirRecursive(srcCss, distCss);
      }
    }
  },
  {
    entry: ["src/build/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: false,
    outDir: "dist/build"
  }
]);
