/**
 * 最长数对链
 * 难度：★★☆☆☆
 * 数对 (a, b) 满足 a < b。若 b < c 则 (a, b) 可以接在 (c, d) 前面。求最长链。
 *
 * 示例：[[1,2],[2,3],[3,4]] => 2
 *
 * 思路：按右端点排序，能接在当前链后面就接上，等价于不重叠区间。
 * 时间 O(n log n)，空间 O(1)
 */

export function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[1] - b[1]);
  let end = Number.NEGATIVE_INFINITY;
  let count = 0;
  for (const [left, right] of pairs) {
    if (left > end) {
      count++;
      end = right;
    }
  }
  return count;
}

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
);
