/**
 * 希尔排序
 * 难度：★★☆☆☆
 * 手写希尔排序，把整数数组排成升序。
 *
 * 示例：[12,34,54,2,3] => [2,3,12,34,54]
 *
 * 思路：按间隔 n/2、n/4... 做插入排序，间隔最后变为 1。
 * 时间取决于间隔序列，这里约为 O(n^2)，空间 O(1) 额外
 */

export function shellSort(nums: number[]): number[] {
  const values = nums.slice();
  let gap = Math.floor(values.length / 2);
  while (gap > 0) {
    for (let index = gap; index < values.length; index += 1) {
      const current = values[index];
      let cursor = index;
      while (cursor >= gap && values[cursor - gap] > current) {
        values[cursor] = values[cursor - gap];
        cursor -= gap;
      }
      values[cursor] = current;
    }
    gap = Math.floor(gap / 2);
  }
  return values;
}

console.log(shellSort([12, 34, 54, 2, 3]));
