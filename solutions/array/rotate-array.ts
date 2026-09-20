/**
 * 轮转数组
 * 将数组中的元素向右轮转 k 个位置。
 *
 * 示例：nums = [1,2,3,4,5,6,7], k = 3 => [5,6,7,1,2,3,4]
 *
 * 思路：三次反转 —— 整体反转，再反转前 k 与后 n-k。
 * 时间 O(n)，空间 O(1)
 */

export function rotate(nums: number[], k: number): void {
  const n = nums.length;
  const steps = k % n;

  const reverse = (left: number, right: number): void => {
    while (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  };

  reverse(0, n - 1);
  reverse(0, steps - 1);
  reverse(steps, n - 1);
}

const sample = [1, 2, 3, 4, 5, 6, 7];
rotate(sample, 3);
console.log(sample);
