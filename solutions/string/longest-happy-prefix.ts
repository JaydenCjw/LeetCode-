/**
 * 最长快乐前缀
 * 难度：★★★★☆
 * 快乐前缀是既是原串真前缀、又是真后缀的字符串。返回最长的一个，没有则返回空串。
 *
 * 示例：s = "level" => "l"
 *
 * 思路：KMP 的 next 数组最后一项就是最长真前后缀长度。
 * 时间 O(n)，空间 O(n)
 */

export function longestPrefix(s: string): string {
  const next = new Array<number>(s.length).fill(0);
  let length = 0;
  for (let i = 1; i < s.length; ) {
    if (s[i] === s[length]) {
      length++;
      next[i] = length;
      i++;
    } else if (length > 0) {
      length = next[length - 1];
    } else {
      i++;
    }
  }
  return s.slice(0, next[s.length - 1]);
}

console.log(longestPrefix("level"));
