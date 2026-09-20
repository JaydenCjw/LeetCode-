---
name: leetcode-solution
description: >-
  为本仓库新增或改写 LeetCode 题解（TypeScript）。在用户要求出题、补题、
  改写旧题、按分类生成算法题时使用。
---

# LeetCode 题解生成

## 仓库约定

- 语言：**TypeScript**
- 题解统一放在 `solutions/` 下，按算法分类：
  `array/`、`two-pointers/`、`sliding-window/`、`linked-list/`、
  `binary-tree/`、`dp/`、`stack/`、`backtracking/`、`graph/`、
  `binary-search/`、`heap/`、`string/`、`greedy/` 等
- 文件名：`{英文短横线题名}.ts`（不含题号），例如 `solutions/array/two-sum.ts`
- 公共模块：`@/types`、`@/heap`（对应 `src/`）
- 说明默认中文；标识符保持英文

## 单题文件模板

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

import { ListNode } from "@/types"; // 按需引入

export function solutionName(...): ReturnType {
  // 实现
}

console.log(/* 本地可验证示例 */);
```

## 生成要求

1. 先判断 `solutions/<分类>/`；没有对应目录则新建。
2. 优先正确与可读；复杂度写清楚。
3. 链表/树复用 `@/types`，堆相关优先复用 `@/heap`。
4. 文件底部保留 `console.log`，可用 `npm run start -- <关键字>` 验证。
5. 不要生成与现有题名重复的文件；已有则升级实现。
6. 文件注释可写题号，文件名本身不加序号。
7. README 只维护目录结构说明，不维护题号/难度大表。

## 批量生成

- 按用户指定分类与数量生成
- 结束后汇总新增路径列表
- 不要顺带改无关文件
