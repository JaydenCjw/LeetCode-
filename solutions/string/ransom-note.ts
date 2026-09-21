/**
 * 赎金信
 * 难度：★☆☆☆☆
 * 判断 ransomNote 能否由 magazine 中的字符构成（每个字符只能用一次）。
 *
 * 示例：ransomNote = "aa", magazine = "aab" => true
 *
 * 思路：统计杂志字符频次再逐个扣减。
 * 时间 O(m + n)，空间 O(1)
 */

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const count = new Map<string, number>();
  for (const ch of magazine) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  for (const ch of ransomNote) {
    const left = count.get(ch) ?? 0;
    if (left === 0) {
      return false;
    }
    count.set(ch, left - 1);
  }
  return true;
}

console.log(canConstruct("aa", "aab"));
