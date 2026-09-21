/**
 * 使字符频率唯一的最小删除次数
 * 难度：★★★☆☆
 * 删除最少字符，使每个出现过的字符频率互不相同。
 *
 * 示例："aab" => 0；"aaabbbcc" => 2；"ceabaacb" => 2
 *
 * 思路：频率从高到低排序。若当前频率不小于前一个，就把它压到前一个频率减一。
 * 时间 O(n)，空间 O(1)
 */

export function minDeletions(s: string): number {
  const freq = new Array<number>(26).fill(0);
  for (const ch of s) {
    freq[ch.charCodeAt(0) - 97]++;
  }
  freq.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 1; i < freq.length; i++) {
    if (freq[i] === 0) {
      continue;
    }
    if (freq[i] >= freq[i - 1]) {
      const target = Math.max(0, freq[i - 1] - 1);
      answer += freq[i] - target;
      freq[i] = target;
    }
  }
  return answer;
}

console.log(minDeletions("aab"));
console.log(minDeletions("aaabbbcc"));
console.log(minDeletions("ceabaacb"));
