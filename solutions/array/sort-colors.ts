/**
 * 颜色分类
 * 含 0/1/2 的数组原地排序（荷兰国旗问题）。
 *
 * 示例：nums = [2,0,2,1,1,0] => [0,0,1,1,2,2]
 *
 * 思路：三指针分区。
 * 时间 O(n)，空间 O(1)
 */

export function sortColors(nums: number[]): void {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

const sample = [2, 0, 2, 1, 1, 0];
sortColors(sample);
console.log(sample);
