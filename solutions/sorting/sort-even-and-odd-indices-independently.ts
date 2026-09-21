/**
 * 将奇偶下标分别排序
 * 难度：★☆☆☆☆
 * 偶数下标上的值按升序，奇数下标上的值按降序，其余下标保持各自的奇偶位置。
 *
 * 示例：[4,1,2,3] => [2,3,4,1]
 *
 * 思路：抽出偶数下标和奇数下标分别排序，再按原位置填回。
 * 时间 O(n log n)，空间 O(n)
 */

export function sortEvenOdd(nums: number[]): number[] {
  const even: number[] = [];
  const odd: number[] = [];
  for (let index = 0; index < nums.length; index += 1) {
    if (index % 2 === 0) {
      even.push(nums[index]);
    } else {
      odd.push(nums[index]);
    }
  }
  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);
  const result: number[] = [];
  for (let index = 0; index < nums.length; index += 1) {
    if (index % 2 === 0) {
      const value = even.shift();
      result.push(value ?? 0);
    } else {
      const value = odd.shift();
      result.push(value ?? 0);
    }
  }
  return result;
}

console.log(sortEvenOdd([4, 1, 2, 3]));
