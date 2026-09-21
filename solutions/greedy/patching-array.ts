/**
 * 按要求补齐数组
 * 难度：★★★★☆
 * 有序正整数数组，可插入任意正整数。使 [1, n] 内每个整数都能被若干个数之和表示，求最少插入次数。
 *
 * 示例：nums = [1,3], n = 6 => 1
 *
 * 思路：维护当前能连续覆盖到的 miss。若下一个数不超过 miss 就并入，否则必须补上 miss 把覆盖翻倍。
 * 时间 O(m + log n)，空间 O(1)
 */

export function minPatches(nums: number[], n: number): number {
  let patches = 0;
  let index = 0;
  let miss = 1;
  while (miss <= n) {
    if (index < nums.length && nums[index] <= miss) {
      miss += nums[index];
      index++;
    } else {
      miss += miss;
      patches++;
    }
  }
  return patches;
}

console.log(minPatches([1, 3], 6));
