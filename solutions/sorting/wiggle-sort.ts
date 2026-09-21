/**
 * 摆动排序
 * 难度：★★☆☆☆
 * 重排数组，使 nums[0] < nums[1] > nums[2] < nums[3]... 相邻不等即可，答案不唯一。
 *
 * 示例：[3,5,2,1,6,4] 一种结果是 [3,5,1,6,2,4]
 *
 * 思路：一次扫描。奇数位应不小于前一个，偶数位应不大于前一个，不满足就交换。
 * 时间 O(n)，空间 O(1)
 */

export function wiggleSort(nums: number[]): number[] {
  const arr = nums.slice();
  for (let index = 1; index < arr.length; index += 1) {
    const shouldSwap =
      index % 2 === 1 ? arr[index] < arr[index - 1] : arr[index] > arr[index - 1];
    if (shouldSwap) {
      const temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
    }
  }
  return arr;
}

console.log(wiggleSort([3, 5, 2, 1, 6, 4]));
