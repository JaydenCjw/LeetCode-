/**
 * 全局倒置与局部倒置
 * 难度：★★☆☆☆
 * 局部倒置是相邻的逆序对，全局倒置是任意 i < j 的逆序对。判断全局倒置的数量是否等于局部倒置。
 *
 * 示例：[1,0,2] => true
 *
 * 思路：若存在距离至少为 2 的逆序，则全局倒置更多。扫描时维护更早位置的最大值，与当前位置后两位比较。
 * 时间 O(n)，空间 O(1)
 */

export function isIdealPermutation(nums: number[]): boolean {
  let peak = nums[0] ?? 0;
  for (let index = 0; index < nums.length - 2; index += 1) {
    peak = Math.max(peak, nums[index]);
    if (peak > nums[index + 2]) {
      return false;
    }
  }
  return true;
}

console.log(isIdealPermutation([1, 0, 2]));
