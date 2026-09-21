/**
 * 找到 K 个最接近的元素
 * 难度：★★★☆☆
 * 升序数组中找出与 x 最接近的 k 个数，按升序返回。距离相同取较小的数。
 *
 * 思路：二分窗口左端点，比较窗口外两侧谁更远。
 * 时间 O(log n + k)，空间 O(1)
 */

export function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - k;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr.slice(left, left + k);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
