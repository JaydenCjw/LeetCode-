/**
 * 分发饼干
 * 难度：★☆☆☆☆
 * 每个孩子有胃口 g[i]，每块饼干大小 s[j]，饼干大于等于胃口才能满足。求最多满足几个孩子。
 *
 * 思路：排序后小饼干优先给胃口小的孩子。
 * 时间 O(n log n)，空间 O(1)
 */

export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let child = 0;
  for (const cookie of s) {
    if (child < g.length && cookie >= g[child]) {
      child++;
    }
  }
  return child;
}

console.log(findContentChildren([1, 2, 3], [1, 1]));
