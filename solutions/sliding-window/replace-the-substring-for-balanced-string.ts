/**
 * 替换子串得到平衡字符串
 * 难度：★★★☆☆
 * 字符串只含 Q、W、E、R。替换一段连续子串，使四种字符个数都等于 n/4。返回最短替换长度。
 *
 * 示例：s = "QWER" => 0；s = "QQWE" => 1
 *
 * 思路：窗口外每种字符不超过 n/4 时，窗口就是需要替换的部分，求最短窗口。
 * 时间 O(n)，空间 O(1)
 */

function codeOf(ch: string): number {
  if (ch === "Q") {
    return 0;
  }
  if (ch === "W") {
    return 1;
  }
  if (ch === "E") {
    return 2;
  }
  return 3;
}

export function balancedString(s: string): number {
  const n = s.length;
  const target = n / 4;
  const freq = [0, 0, 0, 0];
  for (const ch of s) {
    freq[codeOf(ch)]++;
  }
  if (freq[0] === target && freq[1] === target && freq[2] === target && freq[3] === target) {
    return 0;
  }
  let left = 0;
  let best = n;
  for (let right = 0; right < n; right++) {
    freq[codeOf(s[right])]--;
    while (freq[0] <= target && freq[1] <= target && freq[2] <= target && freq[3] <= target) {
      best = Math.min(best, right - left + 1);
      freq[codeOf(s[left])]++;
      left++;
    }
  }
  return best;
}

console.log(balancedString("QWER"));
console.log(balancedString("QQWE"));
