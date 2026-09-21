/**
 * 连续的子数组和
 * 难度：★★★☆☆
 * 判断是否存在长度至少为 2 的连续子数组，其和能被 k 整除。
 *
 * 示例：nums = [23,2,4,6,7], k = 6 => true
 *
 * 思路：前缀和取模，相同余数且下标至少相差 2 时成立。
 * 时间 O(n)，空间 O(min(n, k))
 */

export function checkSubarraySum(nums: number[], k: number): boolean {
  const firstIndex = new Map<number, number>();
  firstIndex.set(0, -1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const mod = ((sum % k) + k) % k;
    const previous = firstIndex.get(mod);
    if (previous !== undefined) {
      if (i - previous >= 2) {
        return true;
      }
    } else {
      firstIndex.set(mod, i);
    }
  }
  return false;
}

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
