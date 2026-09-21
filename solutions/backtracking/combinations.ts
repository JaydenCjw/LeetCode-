/**
 * 组合
 * 难度：★★☆☆☆
 * 返回 1..n 中所有 k 个数的组合。
 *
 * 示例：n = 4, k = 2 => [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 *
 * 思路：从 start 向后选数，长度到 k 收集。
 * 时间 O(C(n,k)*k)，空间 O(k)
 */

export function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (start: number): void => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(1);
  return result;
}

console.log(combine(4, 2));
