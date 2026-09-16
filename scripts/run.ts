#!/usr/bin/env npx tsx
/**
 * 按文件名关键字运行题解。
 * 用法：
 *   npm run start -- two-sum
 *   npm run start -- container
 *   npm run start -- solutions/array/two-sum.ts
 */

import { spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const solutionsRoot = join(root, "solutions");
const query = process.argv[2];

if (!query) {
  console.error("请传入题解关键字，例如：npm run start -- two-sum");
  process.exit(1);
}

function listTsFiles(dir: string): string[] {
  const result: string[] = [];
  for (const name of readdirSync(dir)) {
    const fullPath = join(dir, name);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      result.push(...listTsFiles(fullPath));
    } else if (name.endsWith(".ts")) {
      result.push(fullPath);
    }
  }
  return result;
}

const files = listTsFiles(solutionsRoot);
const normalizedQuery = query.replace(/\\/g, "/");

let matches = files.filter((file) => {
  const rel = relative(root, file).replace(/\\/g, "/");
  return rel === normalizedQuery || rel.endsWith(normalizedQuery) || rel.includes(normalizedQuery);
});

if (matches.length === 0) {
  matches = files.filter((file) => relative(root, file).toLowerCase().includes(query.toLowerCase()));
}

if (matches.length === 0) {
  console.error(`未找到匹配题解：${query}`);
  process.exit(1);
}

if (matches.length > 1) {
  console.error("匹配到多个文件，请写得更具体：");
  for (const file of matches) {
    console.error(`- ${relative(root, file)}`);
  }
  process.exit(1);
}

const target = matches[0];
console.log(`运行：${relative(root, target)}`);
const result = spawnSync("npx", ["tsx", target], {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
});
process.exit(result.status ?? 1);
