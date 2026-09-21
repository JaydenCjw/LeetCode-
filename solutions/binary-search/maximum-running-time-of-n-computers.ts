/**
 * n 台电脑的最大运行时间
 * 难度：★★★★☆
 * n 台电脑同时运行，一块电池只能给一台电脑供电且不能拆开同时用。返回最多能同时运行多久。
 *
 * 示例：n = 2, batteries = [3,3,3] => 4
 *
 * 思路：二分时间，所有电池对单台的贡献不超过该时间，总和需不少于 n 倍时间。
 * 时间 O(m log S)，空间 O(1)
 */

export function maxRunTime(n: number, batteries: number[]): number {
  let left = 1;
  let right = Math.floor(batteries.reduce((sum, value) => sum + value, 0) / n);
  while (left < right) {
    const mid = Math.ceil((left + right + 1) / 2);
    const supply = batteries.reduce((sum, value) => sum + Math.min(value, mid), 0);
    if (supply >= n * mid) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(maxRunTime(2, [3, 3, 3]));
