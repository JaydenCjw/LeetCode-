/**
 * 汉明距离总和
 * 难度：★★★☆☆
 * 返回数组中所有两两汉明距离之和。
 *
 * 示例：[4,14,2] => 6
 *
 * 思路：按位统计 1 的个数，该位贡献 ones * (n-ones)。
 * 时间 O(n)，空间 O(1)
 */

export function totalHammingDistance(nums: number[]): number {
  let total = 0;
  for (let bit = 0; bit < 32; bit++) {
    let ones = 0;
    for (const num of nums) {
      ones += (num >> bit) & 1;
    }
    total += ones * (nums.length - ones);
  }
  return total;
}

console.log(totalHammingDistance([4, 14, 2]));
