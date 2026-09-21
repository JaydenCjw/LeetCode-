/**
 * 破解密码
 * 难度：★★★★☆
 * 密码是长度 n 的 k 进制串。求一个最短字符串，使每个可能密码都是它的子串。
 *
 * 示例：n = 1, k = 2 => "01"
 *
 * 思路：德布鲁因序列。在前缀节点上对 k 条边做欧拉路径，逆序记录边标签。
 * 时间 O(k^n)，空间 O(k^n)
 */

export function crackSafe(n: number, k: number): string {
  const seen = new Set<string>();
  const digits: string[] = [];
  const start = "0".repeat(Math.max(0, n - 1));

  function dfs(node: string): void {
    for (let x = 0; x < k; x++) {
      const edge = node + String(x);
      if (seen.has(edge)) {
        continue;
      }
      seen.add(edge);
      dfs(edge.slice(1));
      digits.push(String(x));
    }
  }

  dfs(start);
  return digits.reverse().join("") + start;
}

console.log(crackSafe(1, 2));
