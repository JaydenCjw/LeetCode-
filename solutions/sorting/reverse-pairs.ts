/**
 * 翻转对
 * 难度：★★★★☆
 * 统计满足 i < j 且 nums[i] > 2 * nums[j] 的数对个数。
 *
 * 示例：[1,3,2,3,1] => 2
 *
 * 思路：归并排序。左右两半已有序时，用双指针统计跨两半的翻转对，再合并。
 * 时间 O(n log n)，空间 O(n)
 */

export function reversePairs(nums: number[]): number {
  const values = nums.slice();
  const aux = values.slice();
  let pairs = 0;

  const sort = (left: number, right: number): void => {
    if (left >= right) {
      return;
    }
    const mid = (left + right) >> 1;
    sort(left, mid);
    sort(mid + 1, right);
    let rightIndex = mid + 1;
    for (let leftIndex = left; leftIndex <= mid; leftIndex += 1) {
      while (rightIndex <= right && values[leftIndex] > 2 * values[rightIndex]) {
        rightIndex += 1;
      }
      pairs += rightIndex - (mid + 1);
    }
    let i = left;
    let j = mid + 1;
    let write = left;
    while (i <= mid && j <= right) {
      if (values[i] <= values[j]) {
        aux[write] = values[i];
        i += 1;
      } else {
        aux[write] = values[j];
        j += 1;
      }
      write += 1;
    }
    while (i <= mid) {
      aux[write] = values[i];
      i += 1;
      write += 1;
    }
    while (j <= right) {
      aux[write] = values[j];
      j += 1;
      write += 1;
    }
    for (let index = left; index <= right; index += 1) {
      values[index] = aux[index];
    }
  };

  if (values.length > 0) {
    sort(0, values.length - 1);
  }
  return pairs;
}

console.log(reversePairs([1, 3, 2, 3, 1]));
