/**
 * 非递减数列
 * 难度：★★☆☆☆
 * 判断能否最多修改一个元素，使数组变为非递减。
 *
 * 示例：nums = [4,2,3] => true
 *
 * 思路：遇到下降时尝试改当前项或前一项，第二次下降则失败。
 * 时间 O(n)，空间 O(1)
 */

export function checkPossibility(nums: number[]): boolean {
  let modified = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (modified) {
        return false;
      }
      modified = true;
      if (i >= 2 && nums[i] < nums[i - 2]) {
        nums[i] = nums[i - 1];
      } else {
        nums[i - 1] = nums[i];
      }
    }
  }
  return true;
}

console.log(checkPossibility([4, 2, 3]));
