/**
 * 有序数组的平方
 * 难度：★☆☆☆☆
 * 非递减数组每个元素平方后，返回非递减结果。
 *
 * 示例：[-4,-1,0,3,10] => [0,1,9,16,100]
 *
 * 思路：两端绝对值更大的先放入结果尾部。
 * 时间 O(n)，空间 O(n)
 */

export function sortedSquares(nums: number[]): number[] {
  const result = new Array<number>(nums.length);
  let left = 0;
  let right = nums.length - 1;
  for (let i = result.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
