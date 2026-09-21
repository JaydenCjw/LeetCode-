/**
 * 统计按位或能得到最大值的子集数目
 * 难度：★★☆☆☆
 * 返回按位或等于整个数组按位或（即最大可能值）的非空子集个数。
 *
 * 示例：[3,1] => 2
 *
 * 思路：先求目标或值，再枚举子集。n 不超过 16。
 * 时间 O(2^n)，空间 O(n)
 */

export function countMaxOrSubsets(nums: number[]): number {
  const target = nums.reduce((or, value) => or | value, 0);
  let count = 0;
  const dfs = (index: number, current: number): void => {
    if (index === nums.length) {
      if (current === target) {
        count++;
      }
      return;
    }
    dfs(index + 1, current);
    dfs(index + 1, current | nums[index]);
  };
  dfs(0, 0);
  return target === 0 ? count - 1 : count;
}

console.log(countMaxOrSubsets([3, 1]));
