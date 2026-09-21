/**
 * 卡车上的最大单元数
 * 难度：★★☆☆☆
 * 每类箱子有个数和每箱单元数。卡车最多装 truckSize 个箱子，求最多能装的单元数。
 *
 * 示例：boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4 => 8
 *
 * 思路：按每箱单元数从高到低装，直到卡车装满。
 * 时间 O(n log n)，空间 O(1)
 */

export function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let units = 0;
  let remain = truckSize;
  for (const [count, perBox] of boxTypes) {
    const take = Math.min(count, remain);
    units += take * perBox;
    remain -= take;
    if (remain === 0) {
      break;
    }
  }
  return units;
}

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4,
  ),
);
