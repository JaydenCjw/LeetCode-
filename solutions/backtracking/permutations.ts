/**
 * 全排列
 * 难度：★★★☆☆
 * 给定不含重复数字的数组 nums，返回其所有可能的全排列。
 *
 * 示例：nums = [1,2,3]
 * => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 思路：回溯，用 used 标记已选元素。
 * 时间 O(n!)，空间 O(n)
 */

export function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  const used = new Array<boolean>(nums.length).fill(false);

  const dfs = (): void => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      dfs();
      path.pop();
      used[i] = false;
    }
  };

  dfs();
  return result;
}

console.log(permute([1, 2, 3]));
