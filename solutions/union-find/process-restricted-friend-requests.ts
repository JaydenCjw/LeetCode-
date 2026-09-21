/**
 * 处理含限制条件的好友请求
 * 难度：★★★☆☆
 * n 个人。restrictions 中的两人永远不能成为朋友（包括间接）。按顺序处理 requests，返回每次是否可以成为朋友。
 *
 * 示例：n = 3，restrictions = [[0,1]]，requests = [[0,2],[2,1]] => [true, false]
 *
 * 思路：并查集。同意请求前检查它是否会把任意一对受限的人连到同一集合。
 * 时间 O(请求数 * 限制数 * α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function friendRequests(n: number, restrictions: number[][], requests: number[][]): boolean[] {
  const uf = new UnionFind(n);
  const answer: boolean[] = [];
  for (const [left, right] of requests) {
    const rootLeft = uf.find(left);
    const rootRight = uf.find(right);
    let allowed = true;
    if (rootLeft !== rootRight) {
      for (const [banLeft, banRight] of restrictions) {
        const rootBanLeft = uf.find(banLeft);
        const rootBanRight = uf.find(banRight);
        const connects =
          (rootBanLeft === rootLeft && rootBanRight === rootRight) ||
          (rootBanLeft === rootRight && rootBanRight === rootLeft);
        if (connects) {
          allowed = false;
          break;
        }
      }
    }
    answer.push(allowed);
    if (allowed) {
      uf.union(left, right);
    }
  }
  return answer;
}

console.log(
  friendRequests(
    3,
    [[0, 1]],
    [
      [0, 2],
      [2, 1],
    ],
  ),
);
