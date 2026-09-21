/**
 * H 指数 II
 * 难度：★★☆☆☆
 * 引用次数已按升序排列。h 指数是最大的 h，使得至少 h 篇论文引用不少于 h 次。
 *
 * 示例：[0,1,3,5,6] => 3
 *
 * 思路：二分论文下标。若 citations[mid] >= n - mid，说明从这里到末尾都能当候选，向左收缩。
 * 时间 O(log n)，空间 O(1)
 */

export function hIndex(citations: number[]): number {
  const n = citations.length;
  let lo = 0;
  let hi = n - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const papers = n - mid;
    if (citations[mid] >= papers) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return n - lo;
}

console.log(hIndex([0, 1, 3, 5, 6]));
