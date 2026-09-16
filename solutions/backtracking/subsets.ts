/**
 * 78. 子集
 * 给定整数数组 nums（元素互不相同），返回所有可能的子集（幂集）。
 *
 * 示例：nums = [1,2,3]
 * => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * 思路：回溯，从 start 开始选或不选，避免重复。
 * 时间 O(2^n)，空间 O(n)
 */

export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (start: number): void => {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(0);
  return result;
}

console.log(subsets([1, 2, 3]));
