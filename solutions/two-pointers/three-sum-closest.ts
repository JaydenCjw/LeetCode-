/**
 * 最接近的三数之和
 * 难度：★★★☆☆
 * 找出三个整数，使其和最接近 target，并返回该和。
 *
 * 示例：nums = [-1,2,1,-4], target = 1 => 2
 *
 * 思路：排序 + 固定一数 + 双指针。
 * 时间 O(n^2)，空间 O(1)
 */

export function threeSumClosest(nums: number[], target: number): number {
  const sorted = [...nums].sort((a, b) => a - b);
  let best = sorted[0] + sorted[1] + sorted[2];

  for (let i = 0; i < sorted.length - 2; i++) {
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum;
      }
      if (sum === target) return sum;
      if (sum < target) left++;
      else right--;
    }
  }

  return best;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
