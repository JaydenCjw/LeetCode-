/**
 * 组合总和 II
 * candidates 可含重复，每个数字只能用一次，返回和为 target 的不重复组合。
 *
 * 示例：candidates = [10,1,2,7,6,1,5], target = 8
 *
 * 思路：排序 + 回溯，同层跳过相同值。
 * 时间指数级，空间 O(n)
 */

export function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  const sorted = [...candidates].sort((a, b) => a - b);

  const dfs = (start: number, remain: number): void => {
    if (remain === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < sorted.length; i++) {
      if (sorted[i] > remain) break;
      if (i > start && sorted[i] === sorted[i - 1]) continue;
      path.push(sorted[i]);
      dfs(i + 1, remain - sorted[i]);
      path.pop();
    }
  };

  dfs(0, target);
  return result;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
