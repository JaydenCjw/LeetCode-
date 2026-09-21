/**
 * 全排列 II
 * 难度：★★☆☆☆
 * 含重复数字的数组，返回所有不重复全排列。
 *
 * 思路：排序后回溯，用 used 标记，同一层跳过重复。
 * 时间 O(n*n!)，空间 O(n)
 */

export function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const path: number[] = [];
  const used = new Array<boolean>(nums.length).fill(false);

  const dfs = (): void => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
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

console.log(permuteUnique([1, 1, 2]));
