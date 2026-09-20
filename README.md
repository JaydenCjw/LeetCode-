# LeetCode-

TypeScript 算法刷题仓库。题解按算法分类放在 `solutions/` 下。

## 目录结构

```text
solutions/           题解（按算法分类）
  array/             数组 / 哈希
  two-pointers/      双指针
  sliding-window/    滑动窗口
  linked-list/       链表
  binary-tree/       二叉树
  dp/                动态规划
  stack/             栈
  backtracking/      回溯
  graph/             图（DFS / BFS / 拓扑）
  binary-search/     二分查找
  heap/              堆 / TopK
  string/            字符串
  greedy/            贪心
src/                 公共工具
  types.ts           ListNode / TreeNode
  heap.ts            通用堆
scripts/run.ts       按关键字运行题解
```

## 约定

- 题解统一 TypeScript，文件名用英文短横线，不含题号（如 `two-sum.ts`）
- 公共类型/工具从 `@/types`、`@/heap` 引入
- 说明与注释默认中文，代码标识符保持英文

## 本地运行

```bash
npm install

# 按文件名关键字运行（推荐）
npm run start -- two-sum
npm run start -- container

# 或直接指定路径
npx tsx solutions/two-pointers/container-with-most-water.ts

# 类型检查
npm run typecheck
```
