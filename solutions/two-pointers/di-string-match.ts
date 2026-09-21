/**
 * 增减字符串匹配
 * 难度：★★☆☆☆
 * 字符串只含 I 和 D。构造 0..n 的排列 perm，使 s[i] 为 I 时 perm[i] < perm[i+1]，为 D 时相反。
 *
 * 示例：s = "IDID" => [0,4,1,3,2]
 *
 * 思路：遇到 I 取当前最小剩余数，遇到 D 取当前最大剩余数。
 * 时间 O(n)，空间 O(n)
 */

export function diStringMatch(s: string): number[] {
  let low = 0;
  let high = s.length;
  const perm: number[] = [];
  for (const ch of s) {
    if (ch === "I") {
      perm.push(low);
      low++;
    } else {
      perm.push(high);
      high--;
    }
  }
  perm.push(low);
  return perm;
}

console.log(diStringMatch("IDID"));
