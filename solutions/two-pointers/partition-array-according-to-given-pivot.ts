/**
 * 按枢轴划分数组
 * 难度：★★☆☆☆
 * 把小于 pivot 的数放前面，等于 pivot 的放中间，大于的放后面，且相对顺序不变。
 *
 * 示例：nums = [9,12,5,10,14,3,10], pivot = 10 => [9,5,3,10,10,12,14]
 *
 * 思路：一次扫描分成三段再拼接，保证稳定。
 * 时间 O(n)，空间 O(n)
 */

export function pivotArray(nums: number[], pivot: number): number[] {
  const less: number[] = [];
  const equal: number[] = [];
  const greater: number[] = [];
  for (const num of nums) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }
  return [...less, ...equal, ...greater];
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
