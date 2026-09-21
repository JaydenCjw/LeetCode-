/**
 * 灯泡开关
 * 难度：★★☆☆☆
 * n 盏灯最初关闭，第 i 轮切换所有编号为 i 倍数的灯。返回最后亮着的灯数。
 *
 * 思路：完全平方数会被切换奇数次，最终为亮。
 * 时间 O(1)，空间 O(1)
 */

export function bulbSwitch(n: number): number {
  return Math.floor(Math.sqrt(n));
}

console.log(bulbSwitch(3));
