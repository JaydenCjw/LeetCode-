/**
 * 最长湍流子数组
 * 难度：★★★☆☆
 * 湍流子数组要求相邻比较符交替大于、小于。返回最长长度。
 *
 * 示例：arr = [9,4,2,10,7,8,8,1,9] => 5
 *
 * 思路：用上升、下降两条链记录以当前位置结尾的湍流长度。
 * 时间 O(n)，空间 O(1)
 */

export function maxTurbulenceSize(arr: number[]): number {
  let best = 1;
  let up = 1;
  let down = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      up = down + 1;
      down = 1;
    } else if (arr[i] < arr[i - 1]) {
      down = up + 1;
      up = 1;
    } else {
      up = 1;
      down = 1;
    }
    best = Math.max(best, up, down);
  }
  return best;
}

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]));
