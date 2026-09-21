/**
 * 组合总和 III
 * 难度：★★☆☆☆
 * 找出所有 k 个不同数字（1..9）之和为 n 的组合。
 *
 * 示例：k = 3, n = 7 => [[1,2,4]]
 *
 * 思路：回溯选数，剪枝剩余和。
 * 时间 O(C(9,k))，空间 O(k)
 */

export function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (start: number, remain: number): void => {
    if (path.length === k) {
      if (remain === 0) {
        result.push([...path]);
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      if (i > remain) {
        break;
      }
      path.push(i);
      dfs(i + 1, remain - i);
      path.pop();
    }
  };

  dfs(1, n);
  return result;
}

console.log(combinationSum3(3, 7));
