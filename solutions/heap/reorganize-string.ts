/**
 * 重构字符串
 * 难度：★★★☆☆
 * 重排字符串使相邻字符不同，不可能则返回空串。
 *
 * 思路：按频次从高到低填偶数位再填奇数位。
 *
 * 时间 O(n)，空间 O(1)
 */

export function reorganizeString(s: string): string {
  const count = new Map<string, number>();
  for (const ch of s) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  const entries = [...count.entries()].sort((a, b) => b[1] - a[1]);
  if (entries[0][1] > Math.floor((s.length + 1) / 2)) {
    return "";
  }

  const result = new Array<string>(s.length);
  let index = 0;
  for (const [ch, times] of entries) {
    for (let i = 0; i < times; i++) {
      if (index >= s.length) {
        index = 1;
      }
      result[index] = ch;
      index += 2;
    }
  }
  return result.join("");
}

console.log(reorganizeString("aab"));
