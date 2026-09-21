/**
 * 按关键字运行题解：npm run start -- two-sum
 */

import { spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { basename, join, relative } from "node:path";

const root = process.cwd();
const query = process.argv[2];

if (!query) {
  console.error("请传入关键字，例如：npm run start -- two-sum");
  process.exit(1);
}

function listTsFiles(dir: string): string[] {
  const result: string[] = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const fullPath = join(dir, name);
    if (statSync(fullPath).isDirectory()) {
      result.push(...listTsFiles(fullPath));
    } else if (name.endsWith(".ts")) {
      result.push(fullPath);
    }
  }
  return result;
}

const files = listTsFiles(join(root, "solutions"));
const key = query.replace(/\\/g, "/").replace(/\.ts$/i, "");
const base = basename(key);

const exact = files.filter((f) => basename(f, ".ts") === base);
const fuzzy = files.filter((f) =>
  relative(root, f).replace(/\\/g, "/").toLowerCase().includes(key.toLowerCase()),
);
const matches = [...new Set(exact.length > 0 ? exact : fuzzy)];

if (matches.length === 0) {
  console.error(`未找到：${query}`);
  process.exit(1);
}
if (matches.length > 1) {
  console.error("匹配多个，请写得更具体：");
  matches.forEach((f) => console.error(`- ${relative(root, f)}`));
  process.exit(1);
}

const target = matches[0];
console.log(`运行：${relative(root, target)}`);
const status = spawnSync(join(root, "node_modules", ".bin", "tsx"), [target], {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
}).status;
process.exit(status ?? 1);
