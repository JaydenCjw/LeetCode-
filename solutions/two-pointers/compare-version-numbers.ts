/**
 * 比较版本号
 * 难度：★★★☆☆
 * 按修订号比较两个版本号。修订号按整数解释，忽略前导零。缺省修订号视为 0。
 * 前者大返回 1，相等返回 0，前者小返回 -1。
 *
 * 示例："1.01" 与 "1.001" => 0；"1.0" 与 "1.0.0" => 0；"0.1" 与 "1.1" => -1
 *
 * 思路：按点拆开后逐段比较整数。
 * 时间 O(n + m)，空间 O(n + m)
 */

export function compareVersion(version1: string, version2: string): number {
  const leftParts = version1.split(".");
  const rightParts = version2.split(".");
  const n = Math.max(leftParts.length, rightParts.length);
  for (let i = 0; i < n; i++) {
    const left = i < leftParts.length ? Number(leftParts[i]) : 0;
    const right = i < rightParts.length ? Number(rightParts[i]) : 0;
    if (left > right) {
      return 1;
    }
    if (left < right) {
      return -1;
    }
  }
  return 0;
}

console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0"));
console.log(compareVersion("0.1", "1.1"));
