/**
 * 使字符串平衡的最少删除次数
 * 难度：★★★☆☆
 * 平衡字符串里所有 'b' 都在 'a' 后面。求最少删除次数。
 *
 * 示例："aababbab" => 2
 *
 * 思路：遇到 b 先记下来。之后的 a 可以和前面一个 b 配对删掉其中一个。
 * 时间 O(n)，空间 O(1)
 */

export function minimumDeletions(s: string): number {
  let pendingB = 0;
  let answer = 0;
  for (const ch of s) {
    if (ch === "b") {
      pendingB++;
    } else if (pendingB > 0) {
      pendingB--;
      answer++;
    }
  }
  return answer;
}

console.log(minimumDeletions("aababbab"));
