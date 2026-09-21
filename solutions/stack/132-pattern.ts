/**
 * 132 模式
 * 难度：★★★☆☆
 * 判断数组中是否存在下标 i < j < k，使得 nums[i] < nums[k] < nums[j]。
 *
 * 示例：[3,1,4,2] => true；[1,2,3,4] => false
 *
 * 思路：从右向左维护单调递减栈。弹出的值是可能的“2”（nums[k]），栈里更大的值是“3”。当前值若小于这个“2”，就找到了“1”。
 * 时间 O(n)，空间 O(n)
 */

export function find132pattern(nums: number[]): boolean {
  const stack: number[] = [];
  let third = Number.NEGATIVE_INFINITY;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] < third) {
      return true;
    }
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      third = stack.pop() ?? third;
    }
    stack.push(nums[i]);
  }
  return false;
}

console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([1, 2, 3, 4]));
