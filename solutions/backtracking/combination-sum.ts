/**
 * 组合总和
 * 给定无重复候选数组 candidates 与目标 target，找出所有可使数字和为 target 的组合。
 * 同一数字可无限次选取。
 *
 * 示例：candidates = [2,3,6,7], target = 7 => [[2,2,3],[7]]
 *
 * 思路：回溯 + 剪枝，从 start 起选，允许重复选当前下标。
 * 时间指数级，空间 O(target)
 */

export function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  const sorted = [...candidates].sort((a, b) => a - b);

  const dfs = (start: number, remain: number): void => {
    if (remain === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < sorted.length; i++) {
      if (sorted[i] > remain) {
        break;
      }
      path.push(sorted[i]);
      dfs(i, remain - sorted[i]);
      path.pop();
    }
  };

  dfs(0, target);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
