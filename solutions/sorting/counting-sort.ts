/**
 * 计数排序
 * 难度：★★☆☆☆
 * 对手写计数排序：输入为非负整数，输出升序结果。
 *
 * 示例：[5,2,3,1] => [1,2,3,5]
 *
 * 思路：统计每个值出现次数，再按值从小到大展开。
 * 时间 O(n + V)，空间 O(V)
 */

export function countingSort(nums: number[]): number[] {
  let max = 0;
  for (const value of nums) {
    if (value > max) {
      max = value;
    }
  }
  const count = Array.from({ length: max + 1 }, () => 0);
  for (const value of nums) {
    count[value] += 1;
  }
  const result: number[] = [];
  for (let value = 0; value < count.length; value += 1) {
    for (let times = 0; times < count[value]; times += 1) {
      result.push(value);
    }
  }
  return result;
}

console.log(countingSort([5, 2, 3, 1]));
