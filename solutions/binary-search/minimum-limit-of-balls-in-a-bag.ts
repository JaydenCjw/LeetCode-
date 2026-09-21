/**
 * 袋子里最少数目的球
 * 难度：★★★☆☆
 * 每次把一袋球分成两袋非空正整数。最多操作 maxOperations 次，使单袋球数的最大值最小。
 *
 * 示例：nums = [9], maxOperations = 2 => 3
 *
 * 思路：二分这个最大值，每袋拆到不超过它所需次数为 ceil(数量/上限)-1。
 * 时间 O(n log M)，空间 O(1)
 */

export function minimumSize(nums: number[], maxOperations: number): number {
  let left = 1;
  let right = Math.max(...nums);

  const needed = (limit: number): number => {
    let operations = 0;
    for (const num of nums) {
      operations += Math.ceil(num / limit) - 1;
    }
    return operations;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (needed(mid) <= maxOperations) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(minimumSize([9], 2));
