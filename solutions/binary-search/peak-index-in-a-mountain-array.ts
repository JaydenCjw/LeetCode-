/**
 * 山脉数组的峰顶索引
 * 难度：★☆☆☆☆
 * 数组先严格上升再严格下降，返回峰顶下标。
 *
 * 示例：[0,1,0] => 1；[0,2,1,0] => 1
 *
 * 思路：若中点小于右侧，峰在右边，否则在左边（含中点）。
 * 时间 O(log n)，空间 O(1)
 */

export function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

console.log(peakIndexInMountainArray([0, 2, 1, 0]));
