/**
 * 仅含 1 的子串数
 * 难度：★★☆☆☆
 * 统计只由字符 1 组成的子串个数，答案对 10^9+7 取模。
 *
 * 示例：s = "0110111" => 9
 *
 * 思路：连续 1 的长度为 L 时贡献 L*(L+1)/2，边扩展边累加当前长度。
 * 时间 O(n)，空间 O(1)
 */

export function numSub(s: string): number {
  const mod = 1_000_000_007;
  let result = 0;
  let run = 0;
  for (const ch of s) {
    if (ch === "1") {
      run++;
      result = (result + run) % mod;
    } else {
      run = 0;
    }
  }
  return result;
}

console.log(numSub("0110111"));
