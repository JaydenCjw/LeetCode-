/**
 * 每个元音包含偶数次的最长子字符串
 * 难度：★★★☆☆
 * 返回满足 a、e、i、o、u 都出现偶数次的最长子串长度。
 *
 * 示例："eleetminicoworoep" => 13
 *
 * 思路：五个元音压成位掩码，前缀状态相同的两处之间元音次数为偶数。
 * 时间 O(n)，空间 O(1)
 */

export function findTheLongestSubstring(s: string): number {
  const bit: Record<string, number> = { a: 1, e: 2, i: 4, o: 8, u: 16 };
  const first = new Map<number, number>([[0, -1]]);
  let state = 0;
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    const flag = bit[s[i]];
    if (flag !== undefined) {
      state ^= flag;
    }
    const previous = first.get(state);
    if (previous === undefined) {
      first.set(state, i);
    } else {
      best = Math.max(best, i - previous);
    }
  }
  return best;
}

console.log(findTheLongestSubstring("eleetminicoworoep"));
