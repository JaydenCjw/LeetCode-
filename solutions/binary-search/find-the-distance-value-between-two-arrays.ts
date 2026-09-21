/**
 * 两个数组间的距离值
 * 难度：★☆☆☆☆
 * 统计 arr1 中满足「与 arr2 每个元素距离都大于 d」的元素个数。
 *
 * 示例：arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2 => 2
 *
 * 思路：arr2 排序后，对每个数二分最近位置，看距离是否都大于 d。
 * 时间 O((n+m) log m)，空间 O(1)
 */

export function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  arr2.sort((a, b) => a - b);
  let count = 0;
  for (const value of arr1) {
    let left = 0;
    let right = arr2.length - 1;
    let ok = true;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (Math.abs(arr2[mid] - value) <= d) {
        ok = false;
        break;
      }
      if (arr2[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (ok) {
      count++;
    }
  }
  return count;
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));
