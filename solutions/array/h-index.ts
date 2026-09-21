/**
 * H 指数
 * 难度：★★★☆☆
 * 研究员有 h 指数：至少 h 篇论文被引用不少于 h 次，其余每篇不超过 h。求最大 h。
 *
 * 示例：[3,0,6,1,5] => 3
 *
 * 思路：降序排序后找最大的 i，使 citations[i] >= i+1。
 * 时间 O(n log n)，空间 O(1)
 */

export function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);
  let h = 0;
  while (h < citations.length && citations[h] >= h + 1) {
    h++;
  }
  return h;
}

console.log(hIndex([3, 0, 6, 1, 5]));
