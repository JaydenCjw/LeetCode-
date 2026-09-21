/**
 * 插入排序
 * 难度：★★☆☆☆
 * 手写插入排序，把整数数组排成升序。不是链表插入排序。
 *
 * 示例：[5,2,4,6,1,3] => [1,2,3,4,5,6]
 *
 * 思路：维护左侧有序区，把当前元素插入到合适位置。
 * 时间 O(n^2)，空间 O(1) 额外
 */

export function insertionSort(nums: number[]): number[] {
  const values = nums.slice();
  for (let index = 1; index < values.length; index += 1) {
    const current = values[index];
    let cursor = index - 1;
    while (cursor >= 0 && values[cursor] > current) {
      values[cursor + 1] = values[cursor];
      cursor -= 1;
    }
    values[cursor + 1] = current;
  }
  return values;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));
