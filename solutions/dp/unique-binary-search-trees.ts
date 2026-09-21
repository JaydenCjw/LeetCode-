/**
 * 不同的二叉搜索树
 * 难度：★★★☆☆
 * 节点值为 1..n，能组成多少种结构不同的 BST。
 *
 * 示例：n = 3 => 5
 *
 * 思路：卡特兰数，枚举根，左右子树方案数相乘再累加。
 * 时间 O(n^2)，空间 O(n)
 */

export function numTrees(n: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let nodes = 2; nodes <= n; nodes++) {
    for (let root = 1; root <= nodes; root++) {
      dp[nodes] += dp[root - 1] * dp[nodes - root];
    }
  }
  return dp[n];
}

console.log(numTrees(3));
