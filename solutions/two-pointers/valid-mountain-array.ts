/**
 * 有效的山脉数组
 * 难度：★☆☆☆☆
 * 山脉数组长度至少为 3，存在峰顶，峰顶左侧严格递增、右侧严格递减。
 *
 * 示例：[2,1] => false；[3,5,5] => false；[0,3,2,1] => true
 *
 * 思路：先走到最长严格上升段，再走到严格下降段，最后必须正好走完且峰顶不在两端。
 * 时间 O(n)，空间 O(1)
 */

export function validMountainArray(arr: number[]): boolean {
  const n = arr.length;
  if (n < 3) {
    return false;
  }
  let i = 0;
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }
  if (i === 0 || i === n - 1) {
    return false;
  }
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === n - 1;
}

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
