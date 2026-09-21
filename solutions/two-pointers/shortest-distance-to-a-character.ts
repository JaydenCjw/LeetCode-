/**
 * 字符的最短距离
 * 难度：★★☆☆☆
 * 对字符串每个位置，返回它到字符 c 的最短距离。
 *
 * 示例：s = "loveleetcode", c = "e" => [3,2,1,0,1,0,0,1,2,2,1,0]
 *
 * 思路：从左、从右各扫一次，取到最近 c 的较小距离。
 * 时间 O(n)，空间 O(n)
 */

export function shortestToChar(s: string, c: string): number[] {
  const n = s.length;
  const answer = new Array<number>(n).fill(n);
  let previous = -n;
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      previous = i;
    }
    answer[i] = i - previous;
  }
  previous = n * 2;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) {
      previous = i;
    }
    answer[i] = Math.min(answer[i], previous - i);
  }
  return answer;
}

console.log(shortestToChar("loveleetcode", "e"));
