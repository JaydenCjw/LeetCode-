/**
 * 最大长度的唯一字符子串串联
 * 难度：★★★☆☆
 * 从字符串数组里选若干个，拼接后每个字母最多出现一次，求最长长度。
 *
 * 示例：["un","iq","ue"] => 4
 *
 * 思路：每个串先压成位掩码，自身有重复字母则丢弃。回溯组合互不重叠的掩码。
 * 时间 O(2^n)，空间 O(n)
 */

function popcount(mask: number): number {
  let count = 0;
  let value = mask;
  while (value > 0) {
    count++;
    value &= value - 1;
  }
  return count;
}

export function maxLength(arr: string[]): number {
  const masks: number[] = [];
  for (const text of arr) {
    let mask = 0;
    let ok = true;
    for (const ch of text) {
      const bit = 1 << (ch.charCodeAt(0) - 97);
      if ((mask & bit) !== 0) {
        ok = false;
        break;
      }
      mask |= bit;
    }
    if (ok) {
      masks.push(mask);
    }
  }
  let best = 0;

  function dfs(index: number, mask: number): void {
    best = Math.max(best, popcount(mask));
    for (let i = index; i < masks.length; i++) {
      if ((mask & masks[i]) === 0) {
        dfs(i + 1, mask | masks[i]);
      }
    }
  }

  dfs(0, 0);
  return best;
}

console.log(maxLength(["un", "iq", "ue"]));
