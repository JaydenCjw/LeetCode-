/**
 * 下一个更大元素 II
 * 难度：★★★☆☆
 * 循环数组中，每个元素右边第一个更大的数，没有则为 -1。
 *
 * 思路：单调递减栈，下标走两圈。
 * 时间 O(n)，空间 O(n)
 */

export function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array<number>(n).fill(-1);
  const stack: number[] = [];
  for (let i = 0; i < n * 2; i++) {
    const value = nums[i % n];
    while (stack.length > 0 && nums[stack[stack.length - 1]] < value) {
      result[stack.pop()!] = value;
    }
    if (i < n) {
      stack.push(i);
    }
  }
  return result;
}

console.log(nextGreaterElements([1, 2, 1]));
