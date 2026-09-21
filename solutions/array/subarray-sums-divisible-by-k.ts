/**
 * 和可被 K 整除的子数组
 * 难度：★★★☆☆
 * 统计和能被 k 整除的连续子数组个数。
 *
 * 示例：nums = [4,5,0,-2,-3,1], k = 5 => 7
 *
 * 思路：前缀和模 k 相同则中间一段可被整除；负数取正模。
 * 时间 O(n)，空间 O(k)
 */

export function subarraysDivByK(nums: number[], k: number): number {
  const count = new Map<number, number>([[0, 1]]);
  let prefix = 0;
  let answer = 0;

  for (const num of nums) {
    prefix = (((prefix + num) % k) + k) % k;
    answer += count.get(prefix) ?? 0;
    count.set(prefix, (count.get(prefix) ?? 0) + 1);
  }

  return answer;
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
