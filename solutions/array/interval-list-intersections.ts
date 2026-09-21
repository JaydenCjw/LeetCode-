/**
 * 区间列表的交集
 * 难度：★★★☆☆
 * 两个区间列表都已按起点排序且互不相交，返回它们的交集区间。
 *
 * 示例：firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]] => [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 *
 * 思路：双指针取重叠部分，并前进结束更早的区间。
 * 时间 O(n + m)，空间 O(1)（不计输出）
 */

export function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
  const result: number[][] = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    const start = Math.max(firstList[i][0], secondList[j][0]);
    const end = Math.min(firstList[i][1], secondList[j][1]);
    if (start <= end) {
      result.push([start, end]);
    }
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

console.log(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]));
