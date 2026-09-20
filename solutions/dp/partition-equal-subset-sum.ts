/**
 * 分割等和子集
 * 判断能否将数组分成两个子集，使其元素和相等。
 *
 * 示例：nums = [1,5,11,5] => true（[1,5,5] 与 [11]）
 *
 * 思路：0-1 背包，目标为总和的一半。
 * 时间 O(n*sum)，空间 O(sum)
 */

export function canPartition(nums: number[]): boolean {
  const total = nums.reduce((sum, num) => sum + num, 0);
  if (total % 2 !== 0) {
    return false;
  }

  const target = total / 2;
  const dp = new Array<boolean>(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let sum = target; sum >= num; sum--) {
      dp[sum] = dp[sum] || dp[sum - num];
    }
  }

  return dp[target];
}

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
