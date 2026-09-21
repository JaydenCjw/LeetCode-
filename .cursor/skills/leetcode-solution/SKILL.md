---
name: leetcode-solution
description: >-
  为本仓库新增或改写 LeetCode 题解（TypeScript）。用户要求出题、补题、
  改写旧题、按分类生成算法题时使用。
---

# LeetCode 题解生成

## 约定

- TypeScript；说明中文；标识符英文。
- 路径：`solutions/<分类>/<英文短横线题名>.ts`（文件名与注释标题均不含题号）。
- 分类：先看已有 `solutions/*`；没有就新建。
- 公共代码优先复用 `src/`（`@/`）。
- 不要为加题去改规则文件；README 分类说明仅在有新目录时手工补一行。

## 模板

```typescript
/**
 * {中文题名}
 * {题意摘要}
 *
 * 示例：...
 *
 * 思路：{核心算法}
 * 时间 O(...), 空间 O(...)
 */

export function solutionName(...): ReturnType {
  // 实现
}

console.log(/* 示例 */);
```

## 步骤

1. 选定或新建分类目录。
2. 查重；同名则升级。
3. 写解法 + `console.log`。
4. 需要时 `npm run start -- <关键字>` 验证。
