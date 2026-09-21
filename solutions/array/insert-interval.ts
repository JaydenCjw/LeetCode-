/**
 * 插入区间
 * 难度：★★★☆☆
 * 无重叠区间列表已按起点排序，插入一个新区间并合并重叠部分。
 *
 * 示例：intervals = [[1,3],[6,9]], newInterval = [2,5] => [[1,5],[6,9]]
 *
 * 思路：左边不重叠直接收，重叠则合并，右边剩余追加。
 * 时间 O(n)，空间 O(n)
 */

export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let index = 0;

  while (index < intervals.length && intervals[index][1] < newInterval[0]) {
    result.push(intervals[index]);
    index++;
  }

  while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
    index++;
  }
  result.push(newInterval);

  while (index < intervals.length) {
    result.push(intervals[index]);
    index++;
  }

  return result;
}

console.log(insert([[1, 3], [6, 9]], [2, 5]));
