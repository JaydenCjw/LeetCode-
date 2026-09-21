/**
 * 学生出勤记录 I
 * 难度：★☆☆☆☆
 * 缺勤 A 少于 2 次，且没有连续 3 次迟到 L，则记录可奖励。
 *
 * 示例：s = "PPALLP" => true
 *
 * 思路：一次扫描统计缺勤和连续迟到。
 * 时间 O(n)，空间 O(1)
 */

export function checkRecord(s: string): boolean {
  let absent = 0;
  let late = 0;
  for (const ch of s) {
    if (ch === "A") {
      absent++;
    }
    if (ch === "L") {
      late++;
    } else {
      late = 0;
    }
    if (absent >= 2 || late >= 3) {
      return false;
    }
  }
  return true;
}

console.log(checkRecord("PPALLP"));
