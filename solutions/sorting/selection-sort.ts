/**
 * 选择排序
 * 难度：★★☆☆☆
 * 手写选择排序，把整数数组排成升序。
 *
 * 示例：[64,25,12,22,11] => [11,12,22,25,64]
 *
 * 思路：每一轮在未排序区间选出最小值，交换到区间起点。
 * 时间 O(n^2)，空间 O(1) 额外
 */

export function selectionSort(nums: number[]): number[] {
  const values = nums.slice();
  for (let index = 0; index < values.length; index += 1) {
    let minIndex = index;
    for (let cursor = index + 1; cursor < values.length; cursor += 1) {
      if (values[cursor] < values[minIndex]) {
        minIndex = cursor;
      }
    }
    const temp = values[index];
    values[index] = values[minIndex];
    values[minIndex] = temp;
  }
  return values;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
