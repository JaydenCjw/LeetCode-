# LeetCode-

TypeScript 算法刷题仓库。题解按算法题型放在 `solutions/` 下。

## 目录结构

```text
solutions/                 题解根目录
  array/                   数组 / 哈希
  two-pointers/            双指针
  sliding-window/          滑动窗口
  linked-list/             链表
  binary-tree/             二叉树
  dp/                      动态规划
  stack/                   栈
  backtracking/            回溯
  graph/                   图（DFS / BFS / 拓扑）
  binary-search/           二分查找
  heap/                    堆 / TopK
  string/                  字符串
  greedy/                  贪心
  union-find/              并查集
  trie/                    字典树
  bit-manipulation/        位运算
  design/                  设计题
  math/                    数学
src/                       可复用工具（通过 @/ 引入）
scripts/run.ts             按关键字运行题解
```

## 约定

- 题解用 TypeScript；文件名英文短横线，不含题号
- 注释标题不含题号；说明与提交信息用中文
- 公共逻辑放 `src/`，题解内优先复用

## 运行

```bash
npm install
npm run start -- two-sum
npm run typecheck
```
