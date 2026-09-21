/**
 * 子集 II
 * 难度：★★☆☆☆
 * 数组可能含重复元素，返回所有不重复子集。
 *
 * 示例：[1,2,2] => [[],[1],[1,2],[1,2,2],[2],[2,2]]
 *
 * 思路：排序后回溯，同一层跳过相同元素。
 * 时间 O(n*2^n)，空间 O(n)
 */

export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (start: number): void => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  };

  dfs(0);
  return result;
}

console.log(subsetsWithDup([1, 2, 2]));
