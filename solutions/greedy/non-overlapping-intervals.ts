/**
 * 无重叠区间
 * 给定区间集合，返回移除区间的最小数量，使剩余区间互不重叠。
 *
 * 示例：intervals = [[1,2],[2,3],[3,4],[1,3]] => 1
 *
 * 思路：按终点排序贪心，能保留则保留。
 * 时间 O(n log n)，空间 O(1)
 */

export function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  const sorted = [...intervals].sort((a, b) => a[1] - b[1]);
  let keep = 1;
  let end = sorted[0][1];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] >= end) {
      keep++;
      end = sorted[i][1];
    }
  }

  return intervals.length - keep;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
);
