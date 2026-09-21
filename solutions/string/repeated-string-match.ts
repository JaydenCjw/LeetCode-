/**
 * 重复叠加字符串匹配
 * 难度：★★☆☆☆
 * 返回最少把 a 重复几次，才能让 b 成为其子串。不可能则返回 -1。
 *
 * 示例：a = "abcd", b = "cdabcdab" => 3
 *
 * 思路：重复次数不超过 b/a 向上取整再加 1，逐次拼接并查找。
 * 时间 O((n + m) * n)，空间 O(n + m)
 */

export function repeatedStringMatch(a: string, b: string): number {
  const limit = Math.ceil(b.length / a.length) + 1;
  let repeated = "";
  for (let count = 1; count <= limit; count++) {
    repeated += a;
    if (repeated.includes(b)) {
      return count;
    }
  }
  return -1;
}

console.log(repeatedStringMatch("abcd", "cdabcdab"));
