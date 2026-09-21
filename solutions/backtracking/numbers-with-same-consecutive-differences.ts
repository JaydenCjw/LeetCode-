/**
 * 连续差相同的数字
 * 难度：★★☆☆☆
 * 返回所有长度为 n 的非负整数，相邻数位差的绝对值都是 k，不含前导零。
 *
 * 示例：n = 3, k = 7 => [181,292,707,818,929]
 *
 * 思路：从 1-9 逐位扩展，下一位只能是当前末位加 k 或减 k。
 * 时间 O(n·2^n)，空间 O(2^n)
 */

export function numsSameConsecDiff(n: number, k: number): number[] {
  let current = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let len = 2; len <= n; len++) {
    const next: number[] = [];
    for (const value of current) {
      const digit = value % 10;
      if (digit + k <= 9) {
        next.push(value * 10 + digit + k);
      }
      if (k !== 0 && digit - k >= 0) {
        next.push(value * 10 + digit - k);
      }
    }
    current = next;
  }
  return current;
}

console.log(JSON.stringify(numsSameConsecDiff(3, 7).sort((a, b) => a - b)));
