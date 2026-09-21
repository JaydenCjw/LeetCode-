/**
 * 数组中的第 K 个最大元素（排序视角）
 * 用快速选择找第 k 大。
 *
 * 示例：nums = [3,2,1,5,6,4], k = 2 => 5
 *
 * 思路：快速选择，目标下标 n-k。
 * 平均时间 O(n)，空间 O(1)
 */

export function findKthLargest(nums: number[], k: number): number {
  const arr = [...nums];
  const target = arr.length - k;

  const partition = (left: number, right: number): number => {
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    const pivot = arr[right];
    let store = left;
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        [arr[store], arr[i]] = [arr[i], arr[store]];
        store++;
      }
    }
    [arr[store], arr[right]] = [arr[right], arr[store]];
    return store;
  };

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const pivot = partition(left, right);
    if (pivot === target) return arr[pivot];
    if (pivot < target) left = pivot + 1;
    else right = pivot - 1;
  }

  return arr[target];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
