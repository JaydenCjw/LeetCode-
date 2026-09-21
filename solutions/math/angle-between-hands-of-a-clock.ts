/**
 * 时钟指针的夹角
 * 难度：★★☆☆☆
 * 给定时和分，返回时针与分针的较小夹角（0 到 180 度）。
 *
 * 示例：hour=12, minutes=30 => 165
 *
 * 思路：分针每分钟 6 度，时针每小时 30 度并随分钟再走 0.5 度。取差与 360 减差的较小值。
 * 时间 O(1)，空间 O(1)
 */

export function angleClock(hour: number, minutes: number): number {
  const minuteAngle = minutes * 6;
  const hourAngle = (hour % 12) * 30 + minutes * 0.5;
  const diff = Math.abs(hourAngle - minuteAngle);
  return Math.min(diff, 360 - diff);
}

console.log(angleClock(12, 30));
