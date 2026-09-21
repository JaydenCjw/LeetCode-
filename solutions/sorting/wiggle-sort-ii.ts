/**
 * 摆动排序 II
 * 难度：★★★☆☆
 * 重排数组，使 nums[0] < nums[1] > nums[2] < nums[3]... 必须严格不等。
 *
 * 示例：[1,5,1,1,6,4] 一种结果是 [1,6,1,5,1,4]
 *
 * 思路：排序后较小的一半从大到小放到偶数下标，较大的一半从大到小放到奇数下标，避免相等元素相邻。
 * 时间 O(n log n)，空间 O(n)
 */

export function wiggleSortII(nums: number[]): number[] {
  const sorted = nums.slice().sort((a, b) => a - b);
  const result = Array.from({ length: nums.length }, () => 0);
  let small = Math.floor((nums.length - 1) / 2);
  let large = nums.length - 1;
  for (let index = 0; index < nums.length; index += 1) {
    if (index % 2 === 0) {
      result[index] = sorted[small];
      small -= 1;
    } else {
      result[index] = sorted[large];
      large -= 1;
    }
  }
  return result;
}

console.log(wiggleSortII([1, 5, 1, 1, 6, 4]));
