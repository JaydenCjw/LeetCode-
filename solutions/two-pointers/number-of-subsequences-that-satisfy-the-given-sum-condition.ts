/**
 * 满足条件的子序列数目
 * 难度：★★★☆☆
 * 非空子序列的最小值与最大值之和不超过 target 时计数，答案对 10^9+7 取模。
 *
 * 示例：nums = [3,5,6,7], target = 9 => 4
 *
 * 思路：排序后双指针。固定当前最小下标，右侧能纳入的任意子集都合法，用快速幂累计 2 的幂。
 * 时间 O(n log n)，空间 O(1)
 */

const MOD = 1_000_000_007;

function modPow(exp: number): number {
  let result = 1;
  let base = 2;
  let power = exp;
  while (power > 0) {
    if (power % 2 === 1) {
      result = (result * base) % MOD;
    }
    base = (base * base) % MOD;
    power = Math.floor(power / 2);
  }
  return result;
}

export function numSubseq(nums: number[], target: number): number {
  nums.sort((left, right) => left - right);
  let left = 0;
  let right = nums.length - 1;
  let answer = 0;
  while (left <= right) {
    if (nums[left] + nums[right] <= target) {
      answer = (answer + modPow(right - left)) % MOD;
      left++;
    } else {
      right--;
    }
  }
  return answer;
}

console.log(numSubseq([3, 5, 6, 7], 9));
