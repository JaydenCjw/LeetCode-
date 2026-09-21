/**
 * 寻找右区间
 * 难度：★★☆☆☆
 * 对每个区间，找起点大于等于它终点、且起点最小的区间下标。不存在则 -1。
 *
 * 示例：[[1,2]] => [-1]；[[3,4],[2,3],[1,2]] => [-1,0,1]
 *
 * 思路：把起点和下标排序，对每个终点二分第一个不小于它的起点。
 * 时间 O(n log n)，空间 O(n)
 */

export function findRightInterval(intervals: number[][]): number[] {
  const starts: [number, number][] = intervals.map((interval, index) => [interval[0], index]);
  starts.sort((a, b) => a[0] - b[0]);
  const answer: number[] = [];
  for (const interval of intervals) {
    const end = interval[1];
    let lo = 0;
    let hi = starts.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (starts[mid][0] >= end) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    answer.push(lo === starts.length ? -1 : starts[lo][1]);
  }
  return answer;
}

console.log(JSON.stringify(findRightInterval([[1, 2]])));
console.log(
  JSON.stringify(
    findRightInterval([
      [3, 4],
      [2, 3],
      [1, 2],
    ]),
  ),
);
