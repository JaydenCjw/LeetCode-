/**
 * 合并区间
 * 难度：★★★☆☆
 * 以数组 intervals 表示若干区间，合并所有重叠区间后返回。
 *
 * 示例：[[1,3],[2,6],[8,10],[15,18]] => [[1,6],[8,10],[15,18]]
 *
 * 思路：按起点排序，依次合并与当前末尾重叠的区间。
 * 时间 O(n log n)，空间 O(n)
 */

export function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) {
    return [];
  }

  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const result: number[][] = [sorted[0].slice()];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const last = result[result.length - 1];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current.slice());
    }
  }

  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
