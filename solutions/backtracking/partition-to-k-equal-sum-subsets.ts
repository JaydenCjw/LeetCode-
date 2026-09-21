/**
 * 划分为 k 个相等的子集
 * 难度：★★★☆☆
 * 判断能否把数组分成 k 个和相等的非空子集。
 *
 * 示例：[4,3,2,3,5,2,1], k = 4 => true
 *
 * 思路：目标和为总和除以 k。从大到小把数字放进 k 个桶，空桶对称剪枝。
 * 时间 O(k^n)，空间 O(n)
 */

export function canPartitionKSubsets(nums: number[], k: number): boolean {
  const sum = nums.reduce((acc, value) => acc + value, 0);
  if (sum % k !== 0) {
    return false;
  }
  const target = sum / k;
  nums.sort((a, b) => b - a);
  if (nums[0] > target) {
    return false;
  }
  const buckets = new Array<number>(k).fill(0);

  function dfs(index: number): boolean {
    if (index === nums.length) {
      return true;
    }
    for (let b = 0; b < k; b++) {
      if (buckets[b] + nums[index] > target) {
        continue;
      }
      buckets[b] += nums[index];
      if (dfs(index + 1)) {
        return true;
      }
      buckets[b] -= nums[index];
      if (buckets[b] === 0) {
        break;
      }
    }
    return false;
  }

  return dfs(0);
}

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
