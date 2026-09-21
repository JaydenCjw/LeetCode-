/**
 * 验证二叉树
 * 难度：★★★☆☆
 * n 个节点用 leftChild、rightChild 表示左右孩子，-1 表示空。判断这是否是一棵合法二叉树。
 *
 * 示例：n = 4，leftChild = [1,-1,3,-1]，rightChild = [2,-1,-1,-1] => true
 *
 * 思路：每个节点最多一个父节点；并查集发现环则非法；最终必须只剩一个连通分量。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]): boolean {
  const uf = new UnionFind(n);
  const parent = new Array<number>(n).fill(-1);
  for (let node = 0; node < n; node++) {
    for (const child of [leftChild[node], rightChild[node]]) {
      if (child === -1) {
        continue;
      }
      if (parent[child] !== -1 || !uf.union(node, child)) {
        return false;
      }
      parent[child] = node;
    }
  }
  return uf.count === 1;
}

console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]));
